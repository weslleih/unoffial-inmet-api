// eslint-disable-next-line import/extensions
import getJson from './get-json.js';

/**
 * Obtem todas estações de acordo com o tipo passado como parâmetro
 * @param {String} tipo - tipo da estação
 * @returns {Promise} - Promise com a lista das estações do tipo informado
 */
export async function obterTodas(tipo) {
  const path = `/estacoes/${tipo.toUpperCase()}`;
  const json = await getJson(path);
  return json;
}

/**
 * Obtem todos os dados horários referentes a todas as estações
 * automáticas de um determinado dia
 * @param {String} dia - Dia no formato AAAA-MM-DD
 * @returns {Promise} - Promise com a lista dos dados horários das estações
 */
export async function obterTodosDadosPorDia(dia) {
  const path = `/estacao/dados/${dia}`;
  const json = await getJson(path);
  return json;
}

/**
 * Obtem todos os dados horários referentes a todas as estações
 * automáticas de um determinado dia e hora
 * @param {string} dia - Dia no formato AAAA-MM-DD
 * @param {string} hora - Hora cheia no formato 1200 com fuso UTC
 * @returns {Promise} - Promise com a lista dos dados das estações
 */
export async function obterTodosDadosHorariosPorDiaEHora(dia, hora) {
  const path = `/estacao/dados/${dia}/${hora}`;
  const json = await getJson(path);
  return json;
}

const estacoes = { obterTodas, obterTodosDadosPorDia, obterTodosDadosHorariosPorDiaEHora };
export default estacoes;
