import { Multiaddr } from '@multiformats/multiaddr'

export interface MultiaddrToUriOpts {
  assumeHttp?: boolean
}

interface Reducer { (str: string, content: string, i: number, parts: Part[], opts?: MultiaddrToUriOpts): string }

const reduceValue: Reducer = (_, v) => v
const tcpUri = (str: string, port: string, parts: Part[], opts?: MultiaddrToUriOpts) => {
  // return tcp when explicitly requested
  if ((opts != null) && opts.assumeHttp === false) return `tcp://${str}:${port}`
  // check if tcp is the last protocol in multiaddr
  let protocol = 'tcp'
  let explicitPort = `:${port}`
  const last = parts[parts.length - 1]
  if (last.protocol === 'tcp') {
    // assume http and produce clean urls
    protocol = port === '443' ? 'https' : 'http'
    explicitPort = port === '443' || port === '80' ? '' : explicitPort
  }
  return `${protocol}://${str}${explicitPort}`
}

const Reducers: Record<string, Reducer> = {
  ip4: reduceValue,
  ip6: (str, content, i, parts) => (
    parts.length === 1 && parts[0].protocol === 'ip6'
      ? content
      : `[${content}]`
  ),
  tcp: (str, content, i, parts, opts) => (
    parts.some(p => ['http', 'https', 'ws', 'wss'].includes(p.protocol))
      ? `${str}:${content}`
      : tcpUri(str, content, parts, opts)
  ),
  udp: (str, content) => `udp://${str}:${content}`,
  dnsaddr: reduceValue,
  dns4: reduceValue,
  dns6: reduceValue,
  ipfs: (str, content) => `${str}/ipfs/${content}`,
  p2p: (str, content) => `${str}/p2p/${content}`,
  http: str => `http://${str}`,
  https: str => `https://${str}`,
  ws: str => `ws://${str}`,
  wss: str => `wss://${str}`,
  'p2p-websocket-star': str => `${str}/p2p-websocket-star`,
  'p2p-webrtc-star': str => `${str}/p2p-webrtc-star`,
  'p2p-webrtc-direct': str => `${str}/p2p-webrtc-direct`
}

interface Part {
  protocol: string
  content: string
}

export function multiaddrToUri (multiaddr: Multiaddr | string | Uint8Array, opts?: MultiaddrToUriOpts) {
  const ma = new Multiaddr(multiaddr)
  const parts = multiaddr.toString().split('/').slice(1)
  return ma
    .tuples()
    .map(tuple => ({
      protocol: parts.shift() ?? '',
      content: (tuple[1] != null) ? parts.shift() ?? '' : ''
    }))
    .reduce((str: string, part: Part, i: number, parts: Part[]) => {
      const reduce = Reducers[part.protocol]
      if (reduce == null) {
        throw new Error(`Unsupported protocol ${part.protocol}`)
      }
      return reduce(str, part.content, i, parts, opts)
    }, '')
}
