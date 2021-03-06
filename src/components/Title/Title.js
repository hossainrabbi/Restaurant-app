import styles from './Title.module.css';

export default function Title({ title, description }) {
  return (
    <div className="d-flex justify-content-center">
      <div className={`${styles.title__content} text-center`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
