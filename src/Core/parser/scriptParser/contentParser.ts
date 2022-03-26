import {commandType} from "../../interface/scene";
import {assetSetter, fileType} from "../../util/assetSetter";

/**
 * 解析语句内容的函数，主要作用是把文件名改为绝对地址或相对地址（根据使用情况而定）
 * @param contentRaw 原始语句内容
 * @param type 语句类型
 * @return {string} 解析后的语句内容
 */
export const contentParser = (contentRaw: string, type: commandType) => {
    switch (type) {
        case commandType.changeBg:
            return assetSetter(contentRaw, fileType.background);
        default:
            return contentRaw;
    }
}