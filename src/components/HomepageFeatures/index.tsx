import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Powerful",
    Svg: require("@site/static/img/undraw_designer_life_re_6ywf.svg").default,
    description: (
      <>
        Get, List, Delete, Copy, Set, Import or Export your data. KV Client
        exposes all the power and flexibility of KV in the browser.
      </>
    ),
  },
  {
    title: "Broad type support",
    Svg: require("@site/static/img/undraw_setup_re_y9w8.svg").default,
    description: (
      <>
        KV Client let's you view, set and update many data types, even complex
        multi-type ones.
      </>
    ),
  },
  {
    title: "Fast",
    Svg: require("@site/static/img/undraw_super_woman_dv-0-y.svg").default,
    description: (
      <>
        Like Deno KV, KV Client is very fast, even when working with large
        databases.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
