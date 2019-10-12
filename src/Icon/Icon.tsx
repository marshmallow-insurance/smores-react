import React, {FC} from 'react';
import styled from 'styled-components';

import {theme} from '../theme';

interface IIcon {
  size: number;
  color: string;
  rotate: number;
}

type Props = {
  /** specify what Icon to render  */
  render: string;
  /** set size of the Icon  */
  size?: number;
  /** set color of the Icon */
  color?: string;
  /** rotation degrees */
  rotate?: number;
};

export const Icon: FC<Props> = ({
  render,
  size = 32,
  color = 'blue7',
  rotate = 0,
}) => (
  <Container size={size} color={color} rotate={rotate}>
    {// MISC - PADLOCK
    render === 'padlock' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12h-2v-2c0-3.309-2.691-6-6-6s-6 2.691-6 6v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2zm-8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-11h8v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2z"
        />
      </svg>
    )}

    {// MISC - RENEWAL
    render === 'renewal' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M24.75 6a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h4.708c-1.648-3.079-4.69-5-8.083-5-3.863 0-7.273 2.49-8.686 6.344a1 1 0 1 1-1.878-.689C6.516 8.005 10.663 5 15.375 5c3.838 0 7.301 1.995 9.375 5.248V6zm.061 12.656a.999.999 0 1 1 1.878.689C24.984 23.995 20.837 27 16.125 27c-3.838 0-7.301-1.995-9.375-5.248V26a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H8.042c1.648 3.079 4.69 5 8.083 5 3.863 0 7.273-2.49 8.686-6.344z"
        />
      </svg>
    )}

    {// CONTACT - EMAIL
    render === 'contact-email' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M25 6H7C5.346 6 4 7.346 4 9v14c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3zm1 17c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1v-9.514l7.905 3.649a5 5 0 0 0 4.19-.001L26 13.486V23zm0-11.717l-8.743 4.035a2.995 2.995 0 0 1-2.515 0L6 11.283V9c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v2.283z"
        />
      </svg>
    )}

    {// CONTACT - AT
    render === 'at' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M16 6C10.486 6 6 10.486 6 16s4.486 10 10 10a1 1 0 1 0 0-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.103-.897 2-2 2s-2-.897-2-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382 2.206 0 4-1.794 4-4 0-5.514-4.486-10-10-10zm0 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>
    )}

    {// CONTACT - UPLOAD-EMAIL
    render === 'upload-email' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M27.611 12.709l-11-8.5a1.001 1.001 0 0 0-1.223 0l-11 8.5c-.244.19-.388.482-.388.792V25c0 1.653 1.346 3 3 3h5a1 1 0 1 0 0-2H7c-.552 0-1-.45-1-1v-9.246l5.459 3.512a1 1 0 0 0 1.082-1.682l-6.108-3.93L16 6.266l9.567 7.393-6.108 3.93a1 1 0 1 0 1.082 1.681L26 15.757V25c0 .552-.448 1-1 1h-5a1 1 0 1 0 0 2h5c1.654 0 3-1.346 3-3V13.5c0-.31-.144-.601-.389-.791zM19.999 15a1 1 0 0 0 .601-1.8l-4-3c-.041-.032-.088-.046-.132-.07-.039-.02-.074-.043-.115-.06a.989.989 0 0 0-.346-.07H15.994a.989.989 0 0 0-.346.07c-.042.017-.076.04-.115.06-.044.024-.092.04-.133.07l-4 3a1 1 0 1 0 1.199 1.6L15 13v14a1 1 0 1 0 2 0V13l2.4 1.8c.18.134.39.2.599.2z"
        />
      </svg>
    )}

    {// PEOPLE - PROFILE
    render === 'profile' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M16 9.995c.553 0 1-.453 1-1.005a1 1 0 1 0-2 0V9c0 .552.447.995 1 .995zM23 7h-2.432A4.99 4.99 0 0 0 16 4a4.99 4.99 0 0 0-4.568 3H9c-1.654 0-3 1.346-3 3v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V10c0-1.654-1.346-3-3-3zm-3 19h-8v-.161C12 24.3 13.832 23 16 23s4 1.3 4 2.839V26zm4-1a1 1 0 0 1-1 1h-1v-.161C22 23.171 19.309 21 16 21s-6 2.171-6 4.839V26H9a1 1 0 0 1-1-1V10c0-.551.448-1 1-1h3.142a1 1 0 0 0 .968-.749A2.993 2.993 0 0 1 16 6c1.358 0 2.547.926 2.891 2.251a.998.998 0 0 0 .967.749H23c.552 0 1 .449 1 1v15zm-8-12c-1.93 0-3.5 1.57-3.5 3.5S14.07 20 16 20s3.5-1.57 3.5-3.5S17.93 13 16 13zm0 5c-.827 0-1.5-.673-1.5-1.5S15.173 15 16 15s1.5.673 1.5 1.5S16.827 18 16 18z"
        />
      </svg>
    )}

    {// INSURANCE - CAR
    render === 'car' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 14.424V9c0-2.757-2.243-5-5-5h-8C9.243 4 7 6.243 7 9v5.424A5.003 5.003 0 0 0 4 19v4a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h16v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1v-4a5.003 5.003 0 0 0-3-4.576zM9 17.995c-.552 0-1 .453-1 1.005a1 1 0 0 0 2 0v-.01a.996.996 0 0 0-1-.995zM12 6c-1.654 0-3 1.346-3 3v5h14V9c0-1.654-1.346-3-3-3h-8zm14 16H6v-3c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v3zm-4-3c0-.552.448-1.005 1-1.005s1 .443 1 .995V19a1 1 0 0 1-2 0z"
        />
      </svg>
    )}

    {// FINANCE - POLICY
    render === 'policy' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M25.707 11.293l-7-7A.996.996 0 0 0 18 4H9C7.346 4 6 5.346 6 7v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V12a.996.996 0 0 0-.293-.707zM24 25a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.586L24 12.414V25zm-10-9v1h-1a1 1 0 1 0 0 2h1v1h-1a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-2v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 1 1.867-.498 1 1 0 1 0 1.73-1.004A3.011 3.011 0 0 0 17 13c-1.654 0-3 1.346-3 3z"
        />
      </svg>
    )}

    {// INTERFACE - EDIT
    render === 'edit' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M24.121 12.122A2.982 2.982 0 0 0 25 10c0-.801-.312-1.555-.879-2.121A2.976 2.976 0 0 0 22 7c-.801 0-1.555.312-2.121.879l-1.464 1.464 4.243 4.243 1.463-1.464zM21.243 15L17 10.757 8.667 19.09 7 25l5.91-1.667L21.243 15z"
        />
      </svg>
    )}

    {// INTERFACE - SEARCH
    render === 'search' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M7 14a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm7-9a9 9 0 1 0 5.618 16.032l5.675 5.675a1 1 0 0 0 1.414-1.414l-5.675-5.675A9 9 0 0 0 14 5z"
        />
      </svg>
    )}

    {// INTERFACE - UP-DOWN
    render === 'up-down' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M15.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L16 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4zM16.707 24.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 22.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
        />
      </svg>
    )}

    {// INTERFACE - CARET
    render === 'caret' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M23.66 12.248a1 1 0 0 0-1.412.095L16 19.482l-6.248-7.14a1 1 0 1 0-1.504 1.317l7 8a.995.995 0 0 0 1.504 0l7-8a1 1 0 0 0-.093-1.411z"
        />
      </svg>
    )}

    {// INTERFACE - DOC-DOWNLOAD
    render === 'doc-download' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fill={theme.colors[color]}
          d="M20.707 22.293a.999.999 0 0 0-1.414 0L17 24.586V17a1 1 0 0 0-2 0v7.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414l4 4A1.01 1.01 0 0 0 16 28a1.01 1.01 0 0 0 .707-.293l4-4a.999.999 0 0 0 0-1.414zm5-12l-6-6A.997.997 0 0 0 19 4H9C7.346 4 6 5.346 6 7v18c0 1.654 1.346 3 3 3h2a1 1 0 0 0 0-2H9c-.551 0-1-.449-1-1V7c0-.551.449-1 1-1h9.586L24 11.414V25c0 .551-.449 1-1 1h-2a1 1 0 0 0 0 2h2c1.654 0 3-1.346 3-3V11a.997.997 0 0 0-.293-.707z"
        />
      </svg>
    )}

    {// REFUND (Box with arrow facing left)
    render === 'refund' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 9a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V10a1 1 0 00-1-1H7zm-3 1a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V10z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.324 12.341a1 1 0 01-.094 1.412L13.661 16l2.569 2.247a1 1 0 01-1.317 1.506l-3.429-3a1 1 0 010-1.506l3.429-3a1 1 0 011.411.095z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.143 16a1 1 0 011-1h7.714a1 1 0 110 2h-7.714a1 1 0 01-1-1z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// CHARGE (Box with arrow facing right)
    render === 'charge' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 9a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V10a1 1 0 00-1-1H7zm-3 1a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V10z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.676 19.659a1 1 0 01.094-1.412L18.339 16l-2.569-2.247a1 1 0 011.317-1.506l3.429 3a1 1 0 010 1.506l-3.429 3a1 1 0 01-1.411-.095z"
          fill={theme.colors[color]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.857 16a1 1 0 01-1 1h-7.714a1 1 0 110-2h7.714a1 1 0 011 1z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// CAR CLAIM (Car going over a bump)
    render === 'car-claim' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        {/* tslint:disable-next-line:max-line-length */}
        <path
          d="M23.942 22.667A4.005 4.005 0 0020.171 20a4.006 4.006 0 00-3.772 2.667 1 1 0 001.886.666 2 2 0 013.773 0 .998.998 0 001.275.61.997.997 0 00.609-1.276zm-17.697-7.62a.996.996 0 00-1.211-.725 1.003 1.003 0 00.242 1.974 1 1 0 00.971-1.242l-.002-.008zM4.016 20.31l16.751-4.489.652 2.432a1 1 0 001.932-.518l-.91-3.397v-.002l-1.73-6.457a2.733 2.733 0 00-.47-.957L16.565 2.09a2.744 2.744 0 00-2.909-.995L2.811 4A2.75 2.75 0 00.788 6.315l-.767 6.027a2.75 2.75 0 00.072 1.06l2.642 9.856a1 1 0 101.932-.517l-.651-2.43zM2.772 6.568a.755.755 0 01.556-.637l10.844-2.905a.753.753 0 01.8.274l2.983 3.924L2.15 11.458l.622-4.89zm.726 11.811l-1.303-4.862 16.751-4.489 1.303 4.861-16.751 4.49zm14.64-6.506a.996.996 0 00-1.202-.74 1.001 1.001 0 00.46 1.952c.537-.127.87-.665.744-1.203l-.002-.009z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// Tick
    render === 'tick' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M10.8606 0.192766C10.6205 -0.00635921 10.2672 0.0268283 10.0681 0.264766L4.76652 6.62664L1.81227 4.65733C1.55295 4.48408 1.2042 4.55439 1.03208 4.81314C0.85939 5.07133 0.92914 5.4212 1.18789 5.59333L4.56289 7.84333C4.65852 7.90633 4.76708 7.93727 4.87452 7.93727C5.03652 7.93727 5.19627 7.86752 5.30764 7.73477L10.9326 0.984766C11.1312 0.746266 11.0986 0.391328 10.8606 0.192766Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}

    {// Cross
    render === 'cross' && (
      <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
        <path
          d="M4.79535 4.71874L7.77255 1.52889C7.99248 1.29325 7.99248 0.912368 7.77255 0.676729C7.55262 0.44109 7.19714 0.44109 6.97721 0.676729L4 3.86659L1.02279 0.676729C0.802864 0.44109 0.447377 0.44109 0.227447 0.676729C0.0075176 0.912368 0.0075176 1.29325 0.227447 1.52889L3.20465 4.71874L0.227447 7.90861C0.0075176 8.14424 0.0075176 8.52512 0.227447 8.76076C0.337131 8.87828 0.481126 8.93734 0.625121 8.93734C0.769115 8.93734 0.91311 8.87828 1.02279 8.76076L4 5.5709L6.97721 8.76076C7.08689 8.87828 7.23088 8.93734 7.37488 8.93734C7.51887 8.93734 7.66287 8.87828 7.77255 8.76076C7.99248 8.52512 7.99248 8.14424 7.77255 7.90861L4.79535 4.71874Z"
          fill={theme.colors[color]}
        />
      </svg>
    )}
  </Container>
);

const Container = styled.span<IIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
  transform: rotate(${p => p.rotate}deg);
`;
