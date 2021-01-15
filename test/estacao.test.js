import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

// eslint-disable-next-line import/extensions
import { estacao } from '../index.js';

const { expect } = chai;
chai.use(chaiAsPromised);

describe('Estações', () => {
  describe('obterDadosHoarios()', () => {
    it('Testa a obtenção de dados horários de uma estação em um intervalo de datas', async () => {
      const codEstacao = 'A301';
      const dadosEstacao = await estacao.obterDadosHoarios('2019-10-23', '2019-10-23', codEstacao);
      expect(dadosEstacao).to.be.instanceOf(Array);
      const primeiroDado = dadosEstacao[0];
      expect(primeiroDado).to.be.an('object').that.has.all.keys([
        'VEN_DIR',
        'DT_MEDICAO',
        'DC_NOME',
        'CHUVA',
        'PRE_INS',
        'VL_LATITUDE',
        'PRE_MIN',
        'UMD_MAX',
        'PRE_MAX',
        'VEN_VEL',
        'UF',
        'PTO_MIN',
        'TEM_MAX',
        'RAD_GLO',
        'PTO_INS',
        'VEN_RAJ',
        'TEM_INS',
        'UMD_INS',
        'CD_ESTACAO',
        'TEM_MIN',
        'VL_LONGITUDE',
        'HR_MEDICAO',
        'UMD_MIN',
        'PTO_MAX',
      ]);
      expect(primeiroDado.CD_ESTACAO).to.be.equal(codEstacao);
    });
  });

  describe('obterDadosDiarios()', () => {
    it('Testa a obtenção de dados horários de uma estação em um intervalo de datas', async () => {
      const codEstacao = 'A301';
      const dadosEstacao = await estacao.obterDadosDiarios('2019-10-01', '2019-10-31', codEstacao);
      expect(dadosEstacao).to.be.instanceOf(Array);
      const primeiroDado = dadosEstacao[0];
      expect(primeiroDado).to.be.an('object').that.has.all.keys([
        'TEMP_MAX',
        'UMID_MED',
        'UF',
        'DT_MEDICAO',
        'DC_NOME',
        'UMID_MIN',
        'TEMP_MED',
        'CHUVA',
        'CD_ESTACAO',
        'VL_LATITUDE',
        'VL_LONGITUDE',
        'TEMP_MIN',
      ]);
      expect(primeiroDado.CD_ESTACAO).to.be.equal(codEstacao);
    });
  });

  describe('obterMaisProxima()', () => {
    it('Testa a obtenção das informações da estação mais próxima', async () => {
      const geocode = '5300108';
      const dadosEstacao = await estacao.obterMaisProxima(geocode);
      expect(dadosEstacao).to.be.an('object').that.has.all.keys([
        'estacao',
        'dados',
      ]);
    });
  });
});
