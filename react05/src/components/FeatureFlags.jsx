import {featureFlags} from "./data"
function FeatureFlags() {
    const {newFeature, deprecatedFeature} = featureFlags[0]

    console.log(featureFlags);
    
    return (
        <>
        <p>{newFeature == true ? "New Feature!" : ""}</p>
        <p>{deprecatedFeature ? "Deprecated Feature" : ""}</p>
        </>
    )
}

export default FeatureFlags