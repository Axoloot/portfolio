import i18n from '../../translations';

const jobs = [
  {
    year: 2019,
    company: 'Quidol',
    desc: i18n.t('jobs.quidol'),
    type: 'job',
    image: 'quidol.webp',
    dates: 'JUILLET 2019 – DECEMBRE 2019',
  },
  {
    year: 2020,
    company: 'Groupe Bel',
    desc: i18n.t('jobs.bel'),
    type: 'job',
    image: 'bel.webp',
    dates: 'OCTOBRE 2020 – MARS 2021',
  },
  {
    year: 2021,
    company: 'RedPill Live',
    desc: i18n.t('jobs.redpilllive'),
    type: 'job',
    dates: 'AVRIL 2021 – AOUT 2021',
    image: 'redhouse.webp',
  },
  {
    year: 2022,
    company: 'RedPill',
    desc: i18n.t('jobs.redpill'),
    type: 'job',
    dates: 'JUILLET 2022 – DECEMBRE 2022',
    image: 'redhouse.webp',
  },
  {
    year: 2024,
    company: 'Pitchy',
    desc: i18n.t('jobs.pitchy'),
    type: 'job',
    dates: 'MARS 2023 – AVRIL 2024',
    image: 'cargo.webp',
  },
];

export default jobs;
