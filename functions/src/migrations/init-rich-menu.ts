import '../alias'

import { RichMenu } from "@line/bot-sdk";
import fs from 'fs'
import { lineClient } from "~/utils/line"

  ; (async () => {
    try {

      const richMenu: RichMenu = {
        "size": {
          "width": 2500,
          "height": 843
        },
        "selected": true,
        "name": "リッチメニュー",
        "chatBarText": "お知らせ",
        "areas": [
          {
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 1254,
              "height": 840
            },
            "action": {
              "type": "message",
              "text": "白い歯見せんな"
            }
          },
          {
            "bounds": {
              "x": 1246,
              "y": 8,
              "width": 1254,
              "height": 835
            },
            "action": {
              "type": "message",
              "text": "クビ"
            }
          }
        ]
      }
      const richMenuId = await lineClient.createRichMenu(richMenu)
      const buffer = fs.readFileSync(`${__dirname}/../../assets/menu.jpg`)
      await lineClient.setRichMenuImage(richMenuId, buffer)

      await lineClient.setDefaultRichMenu(richMenuId)
    } catch (err) {
      console.error(err)

    }
  })()
