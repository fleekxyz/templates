"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 3287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Su": () => (/* binding */ LENS_HUB_CONTRACT_ADDRESS),
  "k4": () => (/* binding */ PERIPHERY_CONTRACT_ADDRESS),
  "Uf": () => (/* binding */ STORAGE_KEY),
  "YR": () => (/* reexport */ mutations/* authenticate */.YR),
  "vv": () => (/* binding */ basicClient),
  "eI": () => (/* binding */ createClient),
  "kt": () => (/* reexport */ mutations/* createProfileMetadataTypedData */.kt),
  "KD": () => (/* reexport */ mutations/* createUnfollowTypedData */.KD),
  "rE": () => (/* reexport */ doesFollow),
  "MQ": () => (/* reexport */ explorePublications),
  "In": () => (/* binding */ fetchProfile),
  "CD": () => (/* reexport */ getChallenge),
  "eC": () => (/* reexport */ getDefaultProfile),
  "FH": () => (/* reexport */ getPublications),
  "P8": () => (/* reexport */ recommendProfiles),
  "t6": () => (/* reexport */ searchProfiles),
  "io": () => (/* reexport */ searchPublications),
  "tZ": () => (/* binding */ signCreatePostTypedData),
  "Z2": () => (/* reexport */ timeline)
});

// UNUSED EXPORTS: APIURL, broadcast, createPostTypedData, createPostTypedDataMutation, followUser, getProfiles, refresh

// EXTERNAL MODULE: external "urql"
var external_urql_ = __webpack_require__(2977);
;// CONCATENATED MODULE: ./api/queries.js
const recommendProfiles = `
  query RecommendedProfiles {
    recommendedProfiles {
        id
        name
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        handle
        stats {
          totalFollowers
        }
    }
  }
`;
const getProfiles = `
  query Profiles($id: ProfileId!) {
    profiles(request: { profileIds: [$id], limit: 25 }) {
      items {
        id
        name
        bio
        attributes {
          displayType
          traitType
          key
          value
        }
        metadata
        isDefault
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        handle
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;
const getDefaultProfile = `
query DefaultProfile($address: EthereumAddress!) {
  defaultProfile(request: { ethereumAddress: $address}) {
    id
    name
    bio
    isDefault
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        chainId
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        chainId
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        contractAddress
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }
}

`;
const getPublications = `
  query Publications($id: ProfileId!, $limit: LimitScalar) {
    publications(request: {
      profileId: $id,
      publicationTypes: [POST],
      limit: $limit
    }) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
      }
    }
  }

  fragment PostFields on Post {
    id
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }


  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment MediaFields on Media {
    url
    mimeType
  }
`;
const searchPublications = `query Search($query: Search!, $type: SearchRequestTypes!) {
  search(request: {
    query: $query,
    type: $type,
    limit: 10
  }) {
    ... on PublicationSearchResult {
      __typename 
     items {
       __typename 
       ... on Comment {
         ...CommentFields
       }
       ... on Post {
         ...PostFields
       }
     }
     pageInfo {
       prev
       totalCount
       next
     }
   }
  }
}

fragment MediaFields on Media {
  url
  mimeType
}

fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment ProfileFields on Profile {
  profileId: id,
  name
  bio
  attributes {
     displayType
     traitType
     key
     value
  }
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
     type
    }
    ... on RevertFollowModuleSettings {
     type
    }
  }
}

fragment PublicationStatsFields on PublicationStats { 
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}

fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}

fragment CollectModuleFields on CollectModule {
  __typename
    ... on FreeCollectModuleSettings {
        type
    followerOnly
    contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
}

fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}

fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
           ...PostFields          
        }
        ... on Comment {
           ...CommentMirrorOfFields        
        }
      }
    }
  }
}

fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
       ...MirrorBaseFields
    }
  }
}
`;
const searchProfiles = `
  query Search($query: Search!, $type: SearchRequestTypes!) {
    search(request: {
      query: $query,
      type: $type,
      limit: 10
    }) {
      ... on ProfileSearchResult {
        __typename 
        items {
          ... on Profile {
            ...ProfileFields
          }
        }
        pageInfo {
          prev
          totalCount
          next
        }
      }
    }
  }

  fragment MediaFields on Media {
    url
  }

  fragment ProfileFields on Profile {
    profileId: id,
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
      }
    }

    stats {
      totalFollowers
      totalFollowing
    }
  }
`;
const explorePublications = `
  query {
    explorePublications(request: {
      sortCriteria: TOP_COMMENTED,
      publicationTypes: [POST, COMMENT, MIRROR],
      limit: 10
    }) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
      }
    }
  }

  fragment ProfileFields on Profile {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    metadata
    isDefault
    handle
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
          ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          ...MediaFields
        }
        small {
         ...MediaFields
        }
        medium {
          ...MediaFields
        }
      }
    }
    ownedBy
    dispatcher {
      address
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
       type
      }
      ... on RevertFollowModuleSettings {
       type
      }
    }
  }

  fragment MediaFields on Media {
    url
    width
    height
    mimeType
  }

  fragment PublicationStatsFields on PublicationStats { 
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
    name
    description
    content
    media {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
    attributes {
      displayType
      traitType
      value
    }
  }

  fragment PostFields on Post {
    id
    profile {
      ...ProfileFields
    }
    stats {
      ...PublicationStatsFields
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
    appId
  }
`;
const getChallenge = `
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`;
const doesFollow = `
  query($request: DoesFollowRequest!) {
    doesFollow(request: $request) { 
      followerAddress
      profileId
      follows
    }
  }
`;
const timeline = `
query Timeline($profileId: ProfileId!, $limit: LimitScalar) {
  timeline(request: { profileId: $profileId, limit: $limit }) {
    items {
      __typename 
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}

fragment MediaFields on Media {
  url
  mimeType
}

fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  isFollowedByMe
  isFollowing(who: null)
  followNftAddress
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
     type
    }
    ... on RevertFollowModuleSettings {
     type
    }
  }
}

fragment PublicationStatsFields on PublicationStats { 
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}

fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}

fragment CollectModuleFields on CollectModule {
  __typename
    ... on FreeCollectModuleSettings {
        type
    followerOnly
    contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
}

fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  collectedBy {
    ...WalletFields
  }
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
}

fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  hidden
  reaction(request: null)
  hasCollectedByMe
}

fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
   ... on Post {
      ...PostFields          
   }
   ... on Comment {
      ...CommentFields          
   }
  }
}

fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  collectedBy {
    ...WalletFields
  }
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
}

fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
           ...PostFields          
        }
        ... on Comment {
           ...CommentMirrorOfFields        
        }
      }
    }
  }
}

fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
       ...MirrorBaseFields
    }
  }
}

fragment WalletFields on Wallet {
   address,
   defaultProfile {
    ...ProfileFields
   }
}
`;
/*
* const doesFollowRequest = {
*   followInfos: [{ followerAddress: EthereumAddress!, profileId: ProfileId! }]
*  }
*/ 

// EXTERNAL MODULE: ./api/mutations.js
var mutations = __webpack_require__(6219);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1438);
;// CONCATENATED MODULE: ./api/index.js




const APIURL = "https://api.lens.dev";
const STORAGE_KEY = "LH_STORAGE_KEY";
const LENS_HUB_CONTRACT_ADDRESS = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";
const PERIPHERY_CONTRACT_ADDRESS = "0xeff187b4190E551FC25a7fA4dFC6cf7fDeF7194f";
const basicClient = new external_urql_.createClient({
    url: APIURL
});
async function fetchProfile(id) {
    try {
        const urqlClient = await createClient();
        const returnedProfile = await urqlClient.query(getProfiles, {
            id
        }).toPromise();
        const profileData = returnedProfile.data.profiles.items[0];
        profileData.color = (0,utils/* generateRandomColor */.C0)();
        const pubs = await urqlClient.query(getPublications, {
            id,
            limit: 50
        }).toPromise();
        return {
            profile: profileData,
            publications: pubs.data.publications.items
        };
    } catch (err) {
        console.log("error fetching profile...", err);
    }
}
async function createClient() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storageData) {
        try {
            const { accessToken  } = await (0,utils/* refreshAuthToken */.Oc)();
            const urqlClient = new external_urql_.createClient({
                url: APIURL,
                fetchOptions: {
                    headers: {
                        "x-access-token": `Bearer ${accessToken}`
                    }
                }
            });
            return urqlClient;
        } catch (err) {
            return basicClient;
        }
    } else {
        return basicClient;
    }
}
async function createPostTypedDataMutation(request, token) {
    const { accessToken  } = await (0,utils/* refreshAuthToken */.Oc)();
    const urqlClient = new external_urql_.createClient({
        url: APIURL,
        fetchOptions: {
            headers: {
                "x-access-token": `Bearer ${accessToken}`
            }
        }
    });
    const result = await urqlClient.mutation(mutations/* createPostTypedData */.n0, {
        request
    }).toPromise();
    return result.data.createPostTypedData;
}
const signCreatePostTypedData = async (request, token)=>{
    const result = await createPostTypedDataMutation(request, token);
    const typedData = result.typedData;
    const signature = await (0,utils/* signedTypeData */.vP)(typedData.domain, typedData.types, typedData.value);
    return {
        result,
        signature
    };
};




/***/ }),

/***/ 6219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KD": () => (/* binding */ createUnfollowTypedData),
/* harmony export */   "YR": () => (/* binding */ authenticate),
/* harmony export */   "bi": () => (/* binding */ refresh),
/* harmony export */   "kt": () => (/* binding */ createProfileMetadataTypedData),
/* harmony export */   "n0": () => (/* binding */ createPostTypedData)
/* harmony export */ });
/* unused harmony exports followUser, broadcast */
const followUser = (/* unused pure expression or super */ null && (`
  mutation($request: FollowRequest!) { 
    createFollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }
`));
const authenticate = `
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`;
const refresh = `
  mutation Refresh(
    $refreshToken: Jwt!
  ) {
    refresh(request: {
      refreshToken: $refreshToken
    }) {
      accessToken
      refreshToken
    }
  }
`;
const broadcast = (/* unused pure expression or super */ null && (`
	mutation Broadcast($request: BroadcastRequest!) {
		broadcast(request: $request) {
			... on RelayerResult {
				txHash
			}
			... on RelayError {
				reason
			}
		}
	}
`));
/* UnfollowRequest
 * const unfollowRequestData = { profile: ProfileId! }
*/ const createUnfollowTypedData = `
  mutation($request: UnfollowRequest!) { 
    createUnfollowTypedData(request: $request) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          BurnWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          tokenId
        }
      }
    }
 }
`;
const createProfileMetadataTypedData = `
  mutation CreateSetProfileMetadataTypedData(
    $profileId: ProfileId!, $metadata: Url!
  ) {
    createSetProfileMetadataTypedData(request: { profileId: $profileId, metadata: $metadata }) {
      id
      expiresAt
      typedData {
        types {
          SetProfileMetadataURIWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          metadata
        }
      }
    }
  }
`;
const createPostTypedData = `
mutation createPostTypedData($request: CreatePublicPostRequest!) {
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
`;



/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C0": () => (/* binding */ generateRandomColor),
/* harmony export */   "N": () => (/* binding */ splitSignature),
/* harmony export */   "Oc": () => (/* binding */ refreshAuthToken),
/* harmony export */   "TC": () => (/* binding */ getSigner),
/* harmony export */   "aj": () => (/* binding */ parseJwt),
/* harmony export */   "gK": () => (/* binding */ trimString),
/* harmony export */   "vP": () => (/* binding */ signedTypeData)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3287);
/* harmony import */ var _api_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6219);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7886);
/* harmony import */ var omit_deep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(omit_deep__WEBPACK_IMPORTED_MODULE_2__);




function trimString(string, length) {
    if (!string) return null;
    return string.length < length ? string : string.substr(0, length - 1) + "...";
}
function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
}
;
async function refreshAuthToken() {
    const token = JSON.parse(localStorage.getItem(_api__WEBPACK_IMPORTED_MODULE_0__/* .STORAGE_KEY */ .Uf));
    if (!token) return;
    try {
        const authData = await _api__WEBPACK_IMPORTED_MODULE_0__/* .basicClient.mutation */ .vv.mutation(_api_mutations__WEBPACK_IMPORTED_MODULE_3__/* .refresh */ .bi, {
            refreshToken: token.refreshToken
        }).toPromise();
        if (!authData.data) return;
        const { accessToken , refreshToken  } = authData.data.refresh;
        const exp = parseJwt(refreshToken).exp;
        localStorage.setItem(_api__WEBPACK_IMPORTED_MODULE_0__/* .STORAGE_KEY */ .Uf, JSON.stringify({
            accessToken,
            refreshToken,
            exp
        }));
        return {
            accessToken
        };
    } catch (err) {
        console.log("error:", err);
    }
}
function getSigner() {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);
    return provider.getSigner();
}
function signedTypeData(domain, types, value) {
    const signer = getSigner();
    return signer._signTypedData(omit_deep__WEBPACK_IMPORTED_MODULE_2___default()(domain, "__typename"), omit_deep__WEBPACK_IMPORTED_MODULE_2___default()(types, "__typename"), omit_deep__WEBPACK_IMPORTED_MODULE_2___default()(value, "__typename"));
}
function splitSignature(signature) {
    return ethers__WEBPACK_IMPORTED_MODULE_1__.utils.splitSignature(signature);
}
function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}


/***/ })

};
;