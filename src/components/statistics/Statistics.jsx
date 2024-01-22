import css from './Statics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}a7`;
}
const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {data.map(e => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={e.id}
          >
            <span className={css.label}>{e.label}</span>
            <span className={css.percentage}>{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
