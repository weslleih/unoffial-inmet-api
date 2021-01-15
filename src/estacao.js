// eslint-disable-next-line import/extensions
import getJson from './get-json.js';

/**
 * Obtem os dados horários referentes a estação automática ou manual informada
 * @param {String} dataInicial - Data inicial de filtro para os dados
 * @param {String} dataFinal - Data final de filtro para os dados
 * @param {string} codEstacao - Código da estação metereológica
 * @returns {Promise} - Promise com os dados horário da estação informada
 */
export async function obterDadosHoarios(dataInicial, dataFinal, codEstacao) {
  const path = `/estacao/${dataInicial}/${dataFinal}/${codEstacao}`;
  const json = await getJson(path);
  return json;
}

/**
 * Obtem os dados diários referentes a estação automática ou manual informada
 * @param {*} dataInicial
 * @param {String} dataInicial - Data inicial de filtro para os dados
 * @param {String} dataFinal - Data final de filtro para os dados
 * @param {string} codEstacao - Código da estação metereológica
 * @returns {Promise} - Promise com os diarios horário da estação informada
 */
export async function obterDadosDiarios(dataInicial, dataFinal, codEstacao) {
  const path = `/estacao/diaria/${dataInicial}/${dataFinal}/${codEstacao}`;
  const json = await getJson(path);
  return json;
}

/**
 * Obtem os dados da estação mais próxima ao geocode passado como parâmetro
 * @param {string} geocode - GEOCODe a ser pesquisado
 * @returns {Promise} - Promise com o objeto do local encontrado
 */
export async function obterMaisProxima(geocode) {
  const api = 'apiprevmet3';
  const path = `/estacao/proxima/${geocode}`;
  const json = await getJson(path, api);
  return json;
}

const estacoes = { obterDadosHoarios, obterDadosDiarios, obterMaisProxima };
export default estacoes;
