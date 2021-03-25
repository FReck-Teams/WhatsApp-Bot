/*==========[Load Tools]===========*/
const fetch = require('node-fetch')
const axios = require('axios')
const Crypto = require('crypto')
/*==========[Load Tools]===========*/

module.exports = simih = async (text) => {
  try {
      const simi = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
      const ans = await simi.Json()
      return ans.simsimi_talk_set.answers[0].sentence
  } catch {
    return 'Ngomong apaan? Dih Gajelas.'
    }
}
//Simi dh selesai. tambahin bawahnya

module.exports = getBaper = async (url, options) => {
  try {
    options ? options : {}
    const res = await axios9({
      method: "GET", url,
      headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
//getBuffer udh. tambahin di bawahnya

module.exports = randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

module.exports = generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

module.exports = getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports = getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}



