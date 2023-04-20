import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://nitinranganath.me" target="_blank" rel="noopener">
          nitinranganath.me
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:asifzohaib1999@gmail.com"
          target="_blank"
          rel="noopener"
        >
          asifzohaib1999@gmail@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/ZohaibA99" target="_blank" rel="noopener">
          zohaiba99
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/zohaib-asif1/"
          target="_blank"
          rel="noopener"
        >
          Zohaib-Asif1
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/username"
          target="_blank"
          rel="noopener"
        >
          text
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/username"
          target="_blank"
          rel="noopener"
        >
          text
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;polywork:{' '}
        <a
          href="https://www.polywork.com/"
          target="_blank"
          rel="noopener"
        >
          text
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/" target="_blank" rel="noopener">
          text
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a href="https://codepen.io/" target="_blank" rel="noopener">
        text
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/"
          target="_blank"
          rel="noopener"
        >
          text
        </a>
        ;
      </p> */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
