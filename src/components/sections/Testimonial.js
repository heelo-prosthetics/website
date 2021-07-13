import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import RuchaImg from '../../assets/images/rucha.png'
import PeterImg from '../../assets/images/peter.png'
import JamesImg from '../../assets/images/james.jpeg'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet our team',
    paragraph: 'A team of engineering students looking to make a difference.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="meet-our-team" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <img src={RuchaImg} alt='Rucha-img'></img>
                  <p className="text-sm mb-0">
                    A biomedical engineering student from Trinity College Dublin.
                  </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Rucha Benare</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href='/'>benarer@tcd.ie</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <img src={PeterImg} alt='Peter-img'></img>
                <p className="text-sm mb-0">
                    An electrical engineering student from Trinity College Dublin.
                  </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Peter O'Flynn</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href='/'>poflynn@tcd.ie</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <img src={JamesImg} alt='James-img'></img>
                <p className="text-sm mb-0">
                    An computer engineering student from University College Dublin.
                  </p>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">James Callanan</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href='/'>james.callanan@ucdconnect.ie</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;