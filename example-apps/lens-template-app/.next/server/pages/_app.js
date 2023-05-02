"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreatePostModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2842);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1438);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3287);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5340);
/* harmony import */ var _abi_lenshub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8480);
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7000);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ipfs_http_client__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_9__]);
([ipfs_http_client__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;
const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_8__.create)({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth
    }
});
function CreatePostModal({ setIsModalOpen  }) {
    const { profile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__/* .AppContext */ .I);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    async function uploadToIPFS() {
        const metaData = {
            version: "2.0.0",
            content: inputRef.current.innerHTML,
            description: inputRef.current.innerHTML,
            name: `Post by @${profile.handle}`,
            external_url: `https://lenster.xyz/u/${profile.handle}`,
            metadata_id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)(),
            mainContentFocus: "TEXT_ONLY",
            attributes: [],
            locale: "en-US"
        };
        const added = await client.add(JSON.stringify(metaData));
        const uri = `https://ipfs.infura.io/ipfs/${added.path}`;
        return uri;
    }
    async function savePost() {
        const contentURI = await uploadToIPFS();
        const { accessToken  } = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .refreshAuthToken */ .Oc)();
        const createPostRequest = {
            profileId: profile.id,
            contentURI,
            collectModule: {
                freeCollectModule: {
                    followerOnly: true
                }
            },
            referenceModule: {
                followerOnlyReferenceModule: false
            }
        };
        try {
            const signedResult = await (0,_api__WEBPACK_IMPORTED_MODULE_5__/* .signCreatePostTypedData */ .tZ)(createPostRequest, accessToken);
            const typedData = signedResult.result.typedData;
            const { v , r , s  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .splitSignature */ .N)(signedResult.signature);
            const contract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(_api__WEBPACK_IMPORTED_MODULE_5__/* .LENS_HUB_CONTRACT_ADDRESS */ .Su, _abi_lenshub__WEBPACK_IMPORTED_MODULE_7__, (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getSigner */ .TC)());
            const tx = await contract.postWithSig({
                profileId: typedData.value.profileId,
                contentURI: typedData.value.contentURI,
                collectModule: typedData.value.collectModule,
                collectModuleInitData: typedData.value.collectModuleInitData,
                referenceModule: typedData.value.referenceModule,
                referenceModuleInitData: typedData.value.referenceModuleInitData,
                sig: {
                    v,
                    r,
                    s,
                    deadline: typedData.value.deadline
                }
            });
            await tx.wait();
            console.log("successfully created post: tx hash", tx.hash);
            setIsModalOpen(false);
        } catch (err) {
            console.log("error: ", err);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: contentContainerStyle,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: topBarStyle,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: topBarTitleStyle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Create post"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setIsModalOpen(false)
                            ,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/close.svg",
                                className: createPostIconStyle
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: contentStyle,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: bottomContentStyle,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: postInputStyle,
                                contentEditable: true,
                                ref: inputRef
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: buttonContainerStyle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: buttonStyle,
                                    onClick: savePost,
                                    children: "Create Post"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const buttonStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  border: none;
  outline: none;
  background-color: rgb(249, 92, 255);;
  padding: 13px 24px;
  color: #340036;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all .35s;
  &:hover {
    background-color: rgba(249, 92, 255, .75);
  }
`;
const buttonContainerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;
const postInputStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 8px;
  width: 100%;
  min-height: 60px;
  padding: 12px 14px;
  font-weight: 500;
`;
const bottomContentStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  margin-top: 10px;
  max-height: 300px;
  overflow: scroll;
`;
const topBarStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding-bottom: 13px;
  padding: 15px 25px;
`;
const topBarTitleStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  flex: 1;
  p {
    margin: 0;
    font-weight: 600;
  }
`;
const contentContainerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, .15);
  width: 700px;
`;
const containerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .35);
  h1 {
    margin: 0;
  }
`;
const contentStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  padding: 15px 25px;
`;
const createPostIconStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
  height: 20px;
  cursor: pointer;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2842);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3287);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1438);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5340);
/* harmony import */ var _components_CreatePostModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CreatePostModal__WEBPACK_IMPORTED_MODULE_9__]);
_components_CreatePostModal__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function MyApp({ Component , pageProps  }) {
    const { 0: connected , 1: setConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: userAddress , 1: setUserAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: userProfile , 1: setUserProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .refreshAuthToken */ .Oc)();
        async function checkConnection() {
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);
            const addresses = await provider.listAccounts();
            if (addresses.length) {
                setConnected(true);
                setUserAddress(addresses[0]);
                getUserProfile(addresses[0]);
            } else {
                setConnected(false);
            }
        }
        checkConnection();
        listenForRouteChangeEvents();
    }, []);
    async function getUserProfile(address) {
        try {
            const urqlClient = await (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .createClient */ .eI)();
            const response = await urqlClient.query(_api__WEBPACK_IMPORTED_MODULE_6__/* .getDefaultProfile */ .eC, {
                address
            }).toPromise();
            setUserProfile(response.data.defaultProfile);
        } catch (err) {
            console.log("error fetching user profile...: ", err);
        }
    }
    async function listenForRouteChangeEvents() {
        router.events.on("routeChangeStart", ()=>{
            (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .refreshAuthToken */ .Oc)();
        });
    }
    async function signIn() {
        try {
            const accounts = await window.ethereum.send("eth_requestAccounts");
            setConnected(true);
            const account = accounts.result[0];
            setUserAddress(account);
            const urqlClient = await (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .createClient */ .eI)();
            const response = await urqlClient.query(_api__WEBPACK_IMPORTED_MODULE_6__/* .getChallenge */ .CD, {
                address: account
            }).toPromise();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signature = await signer.signMessage(response.data.challenge.text);
            const authData = await urqlClient.mutation(_api__WEBPACK_IMPORTED_MODULE_6__/* .authenticate */ .YR, {
                address: account,
                signature
            }).toPromise();
            const { accessToken , refreshToken  } = authData.data.authenticate;
            const accessTokenData = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .parseJwt */ .aj)(accessToken);
            getUserProfile(account);
            localStorage.setItem(_api__WEBPACK_IMPORTED_MODULE_6__/* .STORAGE_KEY */ .Uf, JSON.stringify({
                accessToken,
                refreshToken,
                exp: accessTokenData.exp
            }));
        } catch (err) {
            console.log("error: ", err);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_8__/* .AppContext.Provider */ .I.Provider, {
        value: {
            userAddress,
            profile: userProfile
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: navStyle,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: navContainerStyle,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: linkContainerStyle,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/icon.svg",
                                                className: iconStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: linkTextStyle,
                                                children: "Home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/profiles",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: linkTextStyle,
                                                children: "Explore Profiles"
                                            })
                                        })
                                    }),
                                    userProfile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: `/profile/${userProfile.id}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: linkTextStyle,
                                                children: "Profile"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: buttonContainerStyle,
                                children: [
                                    !connected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: buttonStyle,
                                        onClick: signIn,
                                        children: "Sign in"
                                    }),
                                    connected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: modalButtonStyle,
                                        onClick: ()=>setIsModalOpen(true)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/create-post.svg",
                                            className: createPostStyle
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: appLayoutStyle,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }),
                isModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CreatePostModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    setIsModalOpen: setIsModalOpen
                })
            ]
        })
    });
}
const appLayoutStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  width: 900px;
  margin: 0 auto;
  padding: 78px 0px 50px;
`;
const linkTextStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  margin-right: 40px;
  font-weight: 600;
  font-size: 15px;
`;
const iconStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  height: 35px;
  margin-right: 40px;
`;
const modalButtonStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
const createPostStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  height: 35px;
  margin-right: 5px;
`;
const navStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  background-color: white;
  padding: 15px 30px;
  display: flex;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid #ededed;
`;
const navContainerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  width: 900px;
  margin: 0 auto;
  display: flex;
`;
const linkContainerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  display: flex;
  align-items: center;
`;
const buttonContainerStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const buttonStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`
  border: none;
  outline: none;
  margin-left: 15px;
  background-color: black;
  color: #340036;
  padding: 13px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: rgb(249, 92, 255);
  transition: all .35s;
  width: 160px;
  letter-spacing: .75px;
  &:hover {
    background-color: rgba(249, 92, 255, .75);
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2842:
/***/ ((module) => {

module.exports = require("@emotion/css");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7886:
/***/ ((module) => {

module.exports = require("omit-deep");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2977:
/***/ ((module) => {

module.exports = require("urql");

/***/ }),

/***/ 7000:
/***/ ((module) => {

module.exports = import("ipfs-http-client");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,878,789], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();