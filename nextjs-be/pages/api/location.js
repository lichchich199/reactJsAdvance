import path from 'path';
import { promises as fs } from 'fs';
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
      });
      
      //Find the absolute path of the json directory
      const jsonDirectory = path.join(process.cwd(), '/public/static');
      //Read the json data file data.json
      const fileContents = await fs.readFile(jsonDirectory + '/location.json', 'utf8');
      //Return the content of the data file in json format
    var data = req.body;
    if(data && data.postalCode) {
        var arrContent = JSON.parse(fileContents);
        var result = arrContent.filter(obj => {
            var postalCodeMin = parseInt(obj.postalCodeMin);
            var postalCodeMax = parseInt(obj.postalCodeMax);
            var postalCode = parseInt(data.postalCode);
            return postalCode >= postalCodeMin && postalCode <= postalCodeMax
        })
      res.status(200).json(JSON.stringify(result));
  } else {
    res.status(200).json(fileContents);

  }
}