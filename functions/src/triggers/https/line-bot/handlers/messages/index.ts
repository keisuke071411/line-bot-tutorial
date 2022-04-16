import { MessageEvent, TextEventMessage } from '@line/bot-sdk'
import { lineClient, makeReplyMessage } from '~/utils/line'
import { MY_LINE_USER_ID } from '~/utils/secrets'
import { errorLogger } from '~/utils/util'
import { msgOther } from '../../notice-messages/other'

export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage
    const richMenuList = await lineClient.getRichMenuList()

    switch (text) {
      case "白い歯見せんな":
        await lineClient.linkRichMenuToUser(MY_LINE_USER_ID, richMenuList[0].richMenuId)
        await lineClient.replyMessage(event.replyToken, makeReplyMessage(text))


        break;

      case "リセット":
        await lineClient.linkRichMenuToUser(MY_LINE_USER_ID, richMenuList[1].richMenuId)
        await lineClient.replyMessage(event.replyToken, makeReplyMessage(text))

        break;

      default:
        await lineClient.replyMessage(event.replyToken, msgOther)
    }
  } catch (err) {
    errorLogger(err)
    throw new Error('message text handler')
  }
}
