import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Familiar Interface',
    Svg: require('@site/static/img/undraw_designer_life_re_6ywf.svg').default,
    description: (
      <>
        KV Client will feel very familiar.  Think coding with Deno KV with form fields.
      </>
    ),
  },
  {
    title: 'Broad type support',
    Svg: require('@site/static/img/undraw_setup_re_y9w8.svg').default,
    description: (
      <>
        KV Client let's you view, set and update many data types, even complex multi-type ones.
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('@site/static/img/undraw_super_woman_dv-0-y.svg').default,
    description: (
      <>
        Like Deno KV, KV Client is very fast.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
