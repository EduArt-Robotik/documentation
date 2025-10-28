import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'First steps with Simulation',
    Svg: require('@site/static/img/Eduard_Top_FRed.svg').default,
    description: (
      <>
        Check out the EduArt tutorials to get you started with Eduard and learn how to program your robot. Doesn't matter if you are a beginner or an experienced user, we have something for everyone!
      </>
    ),
  },
  {
    title: 'Get to know your own Eduard',
    Svg: require('@site/static/img/Eduard_Top_Red.svg').default,
    description: (
      <>
        Find all the technical specifications and information about your Eduard robot. Learn more about the hardware and software behind Eduard and make it your companion in education and research.
      </>
    ),
  },
  {
    title: 'Building your own robot',
    Svg: require('@site/static/img/Eduard_Top_Blue.svg').default,
    description: (
      <>
        With our Kinematics Kit Kim you can build your own robot from scratch. Learn about the mechanics and electronics behind robotics and create your own Eduard robot step by step.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
