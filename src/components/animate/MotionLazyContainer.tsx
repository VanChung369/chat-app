import PropTypes from "prop-types";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features").then((res) => res.default);

MotionLazyContainer.propTypes = {
  children: PropTypes.node,
};

export default function MotionLazyContainer({ children }: any) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
