import { Image, ImageSourcePropType, ImageStyle } from "react-native";

export interface Dimensions {
    width: number;
    height: number;
};

async function getSize(src:ImageSourcePropType): Promise<Dimensions> {
    if(typeof src === 'number') { // ImageRequireSource === number

        let {width, height} = Image.resolveAssetSource(src);
        return {width, height};

    } else if("uri" in src) {

        return await new Promise((resolve,reject) => {
            Image.getSize(src.uri as string,(width,height)=>{
                resolve({width, height});
            },(error) => {
                reject(error);
            });
        });

    } else {
        
        return {width:1, height:1};

    }
};

export default getSize;