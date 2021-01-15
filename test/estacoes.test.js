import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

// eslint-disable-next-line import/extensions
import { estacoes } from '../index.js';

const { expect } = chai;
chai.use(chaiAsPromised);

describe('Estações', () => {
  describe('obterTodas()', () => {
    it('Teste de obtenção da lista de estações automáticas', async () => {
      const listaEstacoes = await estacoes.obterTodas('T');
      expect(listaEstacoes).to.be.instanceOf(Array);

      const primeiraEstacao = listaEstacoes[0];
      expect(primeiraEstacao).to.be.an('object').that.has.all.keys([
        'CD_OSCAR',
        'DC_NOME',
        'FL_CAPITAL',
        'DT_FIM_OPERACAO',
        'CD_SITUACAO',
        'TP_ESTACAO',
        'VL_LATITUDE',
        'CD_WSI',
        'CD_DISTRITO',
        'VL_ALTITUDE',
        'SG_ESTADO',
        'SG_ENTIDADE',
        'CD_ESTACAO',
        'VL_LONGITUDE',
        'DT_INICIO_OPERACAO',
      ]);
    });
    it('Teste de obtenção da lista de estações manuais', async () => {
      const listaEstacoes = await estacoes.obterTodas('M');
      expect(listaEstacoes).to.be.instanceOf(Array);

      const primeiraEstacao = listaEstacoes[0];
      expect(primeiraEstacao).to.be.an('object').that.has.all.keys([
        'CD_OSCAR',
        'DC_NOME',
        'FL_CAPITAL',
        'DT_FIM_OPERACAO',
        'CD_SITUACAO',
        'TP_ESTACAO',
        'VL_LATITUDE',
        'CD_WSI',
        'CD_DISTRITO',
        'VL_ALTITUDE',
        'SG_ESTADO',
        'SG_ENTIDADE',
        'CD_ESTACAO',
        'VL_LONGITUDE',
        'DT_INICIO_OPERACAO',
      ]);
    });
    it('Teste de falha ao requisitar uma lista que não exite', (done) => {
      const listaEstacoes = estacoes.obterTodas('W');
      expect(listaEstacoes).to.eventually.be.rejected.notify(done);
    });
  });

  describe('getAllDataByDay()', () => {
    it('Teste de obtenção de todos os dados de todas as estação em determinada data', async () => {
      const dadosEstacoes = await estacoes.obterTodosDadosPorDia('2020-05-02');
      expect(dadosEstacoes).to.be.instanceOf(Array);
      const primeiroDado = dadosEstacoes[0];
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
    }).timeout(20000);
  });

  describe('obterTodosDadosHorariosPorDiaEHora()', () => {
    it('Teste de obtenção de todos os dados horários de todas as estação em determinada data', async () => {
      const dadosEstacoes = await estacoes.obterTodosDadosHorariosPorDiaEHora('2020-05-02', '0800');
      expect(dadosEstacoes).to.be.instanceOf(Array);
      const primeiroDado = dadosEstacoes[0];
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
    });
  });
});
