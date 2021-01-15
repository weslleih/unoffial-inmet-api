import https from 'https';

const APIS = {
  apiprevmet3: 'apiprevmet3.inmet.gov.br',
  apitempo: 'apitempo.inmet.gov.br',
};

function getOption(path, api) {
  const hostname = APIS[api || 'apitempo'];
  return {
    hostname,
    method: 'GET',
    path,
    headers: {
      Host: hostname,
      'User-Agent': 'unoficial-inmet-api',
      Accept: '*/*',
    },
  };
}

export default function getJson(path, api) {
  const options = getOption(path, api);
  return new Promise((resolve, reject) => {
    try {
      const req = https.request(options, (res) => {
        let json = '';

        res.on('data', (chunk) => {
          json += chunk;
        });

        res.on('end', () => {
          if (res.statusCode !== 200) return reject(Error(`Erro código ${res.statusCode}`));
          const data = JSON.parse(json);
          return resolve(data);
        });

        res.on('error', (error) => {
          reject(error);
        });
      });
      req.end();
    } catch (error) {
      reject(error);
    }
  });
}
