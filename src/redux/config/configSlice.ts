import { createSlice } from "@reduxjs/toolkit"
import { ConfigInitialState } from "@/redux/config/configState"
import {
  addOrUpdateSelectedApiCookies,
  addOrUpdateSelectedApiHeaders,
  addOrUpdateSelectedApiUrlParams,
  changeSelectedAction,
  clearCacheActionContent,
  clearSelectedComponent,
  minusScale,
  plusScale,
  removeExpandedKey,
  removeSelectedApiCookies,
  removeSelectedApiHeaders,
  removeSelectedApiUrlParams,
  setExpandedKey,
  updateBottomPanel,
  updateCacheActionContent,
  updateIllaMode,
  updateLeftPanel,
  updateRightPanel,
  updateSelectedAction,
  updateSelectedComponent,
  updateShowDot,
} from "@/redux/config/configReducer"

const configSlice = createSlice({
  name: "builderInfo",
  initialState: ConfigInitialState,
  reducers: {
    updateIllaMode,
    updateLeftPanel,
    updateRightPanel,
    updateBottomPanel,
    updateShowDot,
    updateSelectedComponent,
    updateCacheActionContent,
    clearCacheActionContent,
    clearSelectedComponent,
    updateSelectedAction,
    changeSelectedAction,
    addOrUpdateSelectedApiUrlParams,
    removeSelectedApiUrlParams,
    addOrUpdateSelectedApiHeaders,
    removeSelectedApiHeaders,
    addOrUpdateSelectedApiCookies,
    removeSelectedApiCookies,
    plusScale,
    minusScale,
    setExpandedKey,
    removeExpandedKey,
  },
})

export const configActions = configSlice.actions
export default configSlice.reducer
