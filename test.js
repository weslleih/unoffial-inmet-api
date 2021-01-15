import https from 'https';

const BASE_OPTIONS = {
  hostname: 'apitempo.inmet.gov.br',
  method: 'GET',
  headers: {
    Host: 'apitempo.inmet.gov.br',
    'User-Agent': 'unoficial-inmet-api',
    Accept: '*/*',
  },
};

const tipo = 'T';
const path = `/estacoes/${tipo.toUpperCase()}`;
const options = { path, ...BASE_OPTIONS };
console.time('req');
const req = https.request(options, (res) => {
  let json = '';

  res.on('data', (chunk) => {
    json += chunk;
  });

  res.on('end', () => {
    const obj = JSON.parse(json);
    console.timeEnd('req');
    console.log(obj[0]);
  });

  res.on('error', (error) => {
    console.error(error);
  });
});

req.end();
