// Check if code is same as what I specify in file!
const verify = theirCode => theirCode === 'chau'

const main = async kayn => {
    const { id: myID } = await kayn.Summoner.by.name('pYang')
    const code = await kayn.ThirdPartyCode.by.summonerID(myID)
    console.log(verify(code))
}

module.exports = main
