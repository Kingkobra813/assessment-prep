let animals = [
    {
      name: 'Tiger',
      imageUrl: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8prcmo1th785779hjd39of5t80-20180201131154.Medi.jpeg',
      isMammal: true,
      id: 1
	},
    {
      name: 'Sloth',
      imageUrl: 'https://i.ytimg.com/vi/n7gcats5uCQ/maxresdefault.jpg',
      isMammal: true,
      id: 2
    }
]

let id = 3

module.exports = {
  read: (req, res) => {
    res.status(200).send(animals)
  },
  create: (req, res) => {
    console.log('req.body', req.body)
    //req.body = { name: 'Luke', imageUrl: 'image url', isMammal: true }
    //const name = req.body.name
    //const imageUrl = req.body.imageUrl
    //const isMammal = req.body.isMammal
    //is equivalent to this:
    const { name, imageUrl, isMammal } = req.body
    const newAnimal = {
      name,
      imageUrl,
      isMammal,
      id
    }

    animals.push(newAnimal)
    id++
    res.status(200).send(animals)
  }

}









