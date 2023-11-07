import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full my-auto py-2 flex items-center overflow-hidden text-center justify-center">
      <motion.h1
        className={`inline-block w-full  font-bold capitalize text-4xl ${className}`}
        variants={quote}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
            initial="initial"
            animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired, // Prop type validation for 'text'
  className: PropTypes.string, // Prop type validation for 'className'
};

export default AnimatedText;
