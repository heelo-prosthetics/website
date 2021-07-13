import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Design',
    paragraph: 'In an effort to minimise costs we have arrived at a unique design.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-40">
                    <Image
                      src={require('./../../assets/images/3dPrinter.svg')}
                      alt="Features tile icon 01"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    3D printed frame
                    </h4>
                  <p className="m-0 text-sm">
                    We are using glass fibre reinforced nylon for our prosthesis.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-40">
                    <Image
                      src={require('./../../assets/images/cog.svg')}
                      alt="Features tile icon 02"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Novel actuation
                    </h4>
                  <p className="m-0 text-sm">
                    We are using ball screw linear actuators, which are commonly used in robotics .
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-40">
                    <Image
                      src={require('./../../assets/images/engine.svg')}
                      alt="Features tile icon 03"
                      width={50}
                      height={50} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Cheap parts
                    </h4>
                  <p className="m-0 text-sm">
                    We are using motors found in electric skateboards to drive our leg.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;