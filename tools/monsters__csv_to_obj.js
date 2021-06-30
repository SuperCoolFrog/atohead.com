const fs = require('fs')

try {
  const data = fs.readFileSync('D:\\Pictures\\monster_stats.csv', 'utf8')
  const lines = data.split('\r\n').filter((l) => !!l);
  
  const obj = lines.map((ln, i) => {
    const [name, slash, blunt, piercing, fire , cold, lightning, mind, holy, shadow] = ln.split(',');
    
    return {
      id: name.replace('\'', '').replace(' ', '-').toLowerCase(),
      name,
      resistances: [
        { resistanceType: 'Slash', value: `${slash}%` },
        { resistanceType: 'Blunt', value: `${blunt}%` },
        { resistanceType: 'Piercing', value: `${piercing}%` },
        { resistanceType: 'Fire', value: `${fire}%` },
        { resistanceType: 'Cold', value: `${cold}%` },
        { resistanceType: 'Lightning', value: `${lightning}%` },
        { resistanceType: 'Mind', value: `${mind}%` },
        { resistanceType: 'Holy', value: `${holy}%` },
        { resistanceType: 'Shadow', value: `${shadow}%` }
      ],
      headshotSprite : { spriteSheetIndex: i, "@mixin": 'headshotSprite' }
    }
  });

  // console.log(JSON.stringify(obj))
  try {
    const data = fs.writeFileSync('./monster_out.txt', JSON.stringify(obj))
    //file written successfully
  } catch (err) {
    console.error(err)
  }
} catch (err) {
  console.error(err)
}