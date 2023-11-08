import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Emotion } from './MarshformGenerator'

export type EmotionPosition = 'center' | 'top' | 'bottom' | 'left' | 'right'

interface EmotionWrapperProps {
  emotion?: Emotion
  emotionPosition?: EmotionPosition
  width?: number
}

export const EmotionWrapper: FC<EmotionWrapperProps> = ({
  emotion = 'focussed',
  emotionPosition = 'center',
  width = 100,
}) => {
  return (
    <Container emotionPosition={emotionPosition}>
      {emotion === 'focussed' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 32"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#FBF8F5"
              d="M31.323 15.6c0 8.485-7.044 15.32-15.601 14.986-7.715-.299-14.099-6.691-14.388-14.415C1.008 7.633 7.854.598 16.328.598c8.476 0 14.995 6.709 14.995 14.994"
            />
            <path
              fill="#292924"
              d="M25.823 16.042c0 5.254-4.257 9.5-9.5 9.5s-9.5-4.37-9.5-9.5 4.257-9.5 9.5-9.5c5.244 0 9.5 4.257 9.5 9.5Z"
            />
            <path
              fill="#FBF8F5"
              d="M71.323 15.6c0 8.485-7.044 15.32-15.601 14.986-7.715-.299-14.099-6.691-14.388-14.415C41.008 7.633 47.854.598 56.328.598c8.476 0 14.995 6.709 14.995 14.994"
            />
            <path
              fill="#292924"
              d="M65.823 16.042c0 5.254-4.257 9.5-9.5 9.5s-9.5-4.37-9.5-9.5 4.257-9.5 9.5-9.5c5.244 0 9.5 4.257 9.5 9.5Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h71v31h-71z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'sugar-rush' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 32"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#FBF8F5"
              d="M51.732 15.905c0-6.734 4.936-12.3 11.383-13.318A14.92 14.92 0 0 0 56.232.905c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 2.483 0 4.82-.613 6.883-1.682-6.447-1.018-11.383-6.584-11.383-13.318Z"
            />
            <path
              fill="#292924"
              d="M71.232 15.905c0-5.8-3.298-10.823-8.117-13.318-6.447 1.018-11.383 6.584-11.383 13.318s4.936 12.3 11.383 13.318c4.819-2.496 8.117-7.518 8.117-13.318Z"
            />
            <path
              fill="#FBF8F5"
              d="M11.732 15.905c0-6.734 4.936-12.3 11.383-13.318A14.92 14.92 0 0 0 16.232.905c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 2.483 0 4.82-.613 6.883-1.682-6.447-1.018-11.383-6.584-11.383-13.318Z"
            />
            <path
              fill="#292924"
              d="M31.232 15.905c0-5.8-3.298-10.823-8.117-13.318-6.447 1.018-11.383 6.584-11.383 13.318s4.936 12.3 11.383 13.318c4.819-2.496 8.117-7.518 8.117-13.318Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h71v31h-71z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'suspicious' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 16"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <path
                fill="#FBF8F5"
                d="M8.816 15.4c-4.125.15-7.605-3.097-7.762-7.221A7.53 7.53 0 0 1 8.276.409h15c4.132-.135 7.612 3.097 7.762 7.237h.007v-.007c.15 4.14-3.097 7.604-7.23 7.761h-15Z"
              />
              <path
                fill="#292924"
                d="M31.045 7.639c.15 4.14-3.097 7.604-7.23 7.761-4.124.15-7.604-3.097-7.76-7.221a7.53 7.53 0 0 1 7.221-7.77c4.132-.135 7.612 3.097 7.762 7.237h.007v-.007Z"
              />
              <path
                fill="#FBF8F5"
                d="M48.816 15.4c-4.125.15-7.605-3.097-7.762-7.221a7.53 7.53 0 0 1 7.222-7.77h15c4.132-.135 7.612 3.097 7.762 7.237h.007v-.007c.15 4.14-3.097 7.604-7.23 7.761h-15Z"
              />
              <path
                fill="#292924"
                d="M71.045 7.639c.15 4.14-3.097 7.604-7.23 7.761-4.124.15-7.603-3.097-7.76-7.221a7.53 7.53 0 0 1 7.221-7.77c4.132-.135 7.612 3.097 7.762 7.237h.007v-.007Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h71v15h-71z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M.823-.458h71v16h-71z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'curious' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 82 24"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <path
                fill="#FBF8F5"
                d="M18.297.876c-3.837 0-7.339 1.027-10.294 2.787 4.642.282 8.316 3.864 8.316 8.253s-3.674 7.97-8.316 8.253c2.955 1.76 6.457 2.787 10.294 2.787 8.11 0 14.75-4.544 17.804-11.04C33.047 5.42 26.407.876 18.297.876Z"
              />
              <path
                fill="#292924"
                d="M16.322 11.916c0-4.39-3.675-7.971-8.317-8.253-3.29 1.96-5.9 4.83-7.509 8.253a19.047 19.047 0 0 0 7.51 8.252c4.641-.282 8.316-3.863 8.316-8.252Z"
              />
              <path
                fill="#FBF8F5"
                d="M63.791.876c-3.838 0-7.34 1.027-10.294 2.787 4.642.282 8.316 3.864 8.316 8.253s-3.674 7.97-8.316 8.253c2.955 1.76 6.456 2.787 10.294 2.787 8.11 0 14.75-4.544 17.804-11.04C78.54 5.42 71.9.876 63.79.876Z"
              />
              <path
                fill="#292924"
                d="M61.815 11.916c0-4.39-3.674-7.971-8.316-8.253-3.29 1.96-5.9 4.83-7.51 8.253a19.047 19.047 0 0 0 7.51 8.252c4.642-.282 8.316-3.863 8.316-8.252Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M81.823 23.542h-81v-23h81z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M-.272.542h82.095v23H-.272z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'blank' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47 16"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g fill="#292924" clipPath="url(#b)">
              <path d="M46 7.771c.15 4.142-3.098 7.609-7.23 7.766-4.124.15-7.604-3.099-7.761-7.225C30.874 4.17 34.106.704 38.23.546c4.133-.135 7.612 3.099 7.762 7.24H46v-.015ZM16 7.771c.15 4.142-3.098 7.609-7.23 7.766-4.124.15-7.604-3.099-7.761-7.225C.874 4.17 4.106.704 8.23.546c4.133-.135 7.612 3.099 7.762 7.24H16v-.015Z" />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h46v15h-46z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M.823.542h46v15h-46z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'exhausted' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 77 32"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g fill="#292924" clipPath="url(#b)">
              <path d="M76.777 6.828 70.855.905l-9.078 9.078L52.7.906l-5.923 5.922 9.078 9.077-9.078 9.078 5.923 5.922 9.077-9.078 9.078 9.078 5.922-5.922-9.077-9.078 9.077-9.077ZM30.777 6.828 24.855.905l-9.078 9.078L6.7.905.777 6.827l9.078 9.078-9.078 9.078L6.7 30.905l9.077-9.077 9.078 9.077 5.922-5.922-9.077-9.078 9.077-9.077Z" />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h76v31h-76z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M-.177.542h77v31h-77z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'happy' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width < 40 ? 40 : width * 0.5}
          viewBox="0 0 92 21"
          fill="none"
        >
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <path
                fill="#F8F2EA"
                d="M80.26 20.598c.44-1.06.71-2.21.75-3.43h.01c.2-5.5-4.13-10.13-9.638-10.34-5.498-.2-10.137 4.13-10.347 9.63-.05 1.46.23 2.86.75 4.14H51.027c.01-11.05 8.958-20 20.005-20 11.048 0 19.995 8.95 19.995 20H80.26Z"
              />
              <path
                fill="#292924"
                d="M71.382 6.828c5.509.21 9.838 4.84 9.638 10.35h-.01c-.04 1.2-.31 2.35-.75 3.41H61.784c-.52-1.27-.8-2.67-.75-4.14.21-5.5 4.85-9.83 10.348-9.63v.01Z"
              />
              <path
                fill="#F8F2EA"
                d="M30.26 20.598c.44-1.06.71-2.21.75-3.43h.01c.2-5.5-4.13-10.13-9.638-10.34-5.498-.2-10.137 4.13-10.347 9.63-.05 1.46.23 2.86.75 4.14H1.027c.01-11.05 8.958-20 20.005-20 11.048 0 19.995 8.95 19.995 20H30.26Z"
              />
              <path
                fill="#292924"
                d="M21.382 6.828c5.509.21 9.838 4.84 9.638 10.35h-.01c-.04 1.2-.31 2.35-.75 3.41H11.784c-.52-1.27-.8-2.67-.75-4.14.21-5.5 4.85-9.83 10.348-9.63v.01Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M91.823 20.542h-91v-20h91z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M91.823 20.542h-91v-20h91z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'sleeping' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 16"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g fill="#292924" clipPath="url(#b)">
              <path d="M30.924.405h-8.266a6.742 6.742 0 0 1-6.734 6.734A6.742 6.742 0 0 1 9.191.405H.924c0 8.274 6.726 15 15 15 8.274 0 15-6.726 15-15ZM70.924.405h-8.266a6.742 6.742 0 0 1-6.734 6.734A6.742 6.742 0 0 1 49.191.405h-8.267c0 8.267 6.726 15 15 15 8.274 0 15-6.726 15-15Z" />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h71v15h-71z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M.356-.458h71v16h-71z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'tired' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 10"
          width={width < 40 ? 40 : width * 0.5}
          fill="none"
        >
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <g fill="#292924" clipPath="url(#c)">
                <path d="M31.141.905h-30v8h30v-8ZM71.141.905h-30v8h30v-8Z" />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h71v9h-71z" />
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M.356-3.458h71v16h-71z" />
            </clipPath>
            <clipPath id="c">
              <path fill="#fff" d="M.823.542h71v9h-71z" />
            </clipPath>
          </defs>
        </svg>
      )}
      {emotion === 'disappointed' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width < 40 ? 40 : width * 0.5}
          viewBox="0 0 92 21"
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#F8F2EA"
              d="M12.386.486a9.75 9.75 0 0 0-.75 3.43h-.01c-.2 5.5 4.129 10.13 9.637 10.34 5.499.2 10.138-4.13 10.348-9.63.05-1.46-.23-2.86-.75-4.14h10.757c-.01 11.05-8.958 20-20.005 20-11.047 0-19.995-8.95-19.995-20h10.768Z"
            />
            <path
              fill="#292924"
              d="M21.263 14.256c-5.508-.21-9.837-4.84-9.637-10.35h.01c.04-1.2.31-2.35.75-3.41H30.86c.52 1.27.8 2.67.75 4.14-.21 5.5-4.849 9.83-10.348 9.63v-.01Z"
            />
            <path
              fill="#F8F2EA"
              d="M62.386.486a9.75 9.75 0 0 0-.75 3.43h-.01c-.2 5.5 4.129 10.13 9.637 10.34 5.499.2 10.138-4.13 10.348-9.63.05-1.46-.23-2.86-.75-4.14h10.757c-.01 11.05-8.958 20-20.005 20-11.047 0-19.995-8.95-19.995-20h10.767Z"
            />
            <path
              fill="#292924"
              d="M71.263 14.256c-5.508-.21-9.837-4.84-9.637-10.35h.01c.04-1.2.31-2.35.75-3.41H80.86c.52 1.27.8 2.67.75 4.14-.21 5.5-4.849 9.83-10.348 9.63v-.01Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.823.542h91v20h-91z" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Container>
  )
}

interface IContainer {
  emotionPosition: EmotionPosition
}

const Container = styled.div<IContainer>(
  ({ emotionPosition }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;

    ${emotionPosition === 'center' &&
    css`
      justify-content: center;
      align-items: center;
    `}
    ${emotionPosition === 'top' &&
    css`
      padding: 8%;
      justify-content: center;
      align-items: flex-start;
    `}
    ${emotionPosition === 'bottom' &&
    css`
      padding: 8%;
      justify-content: center;
      align-items: flex-end;
    `}
    ${emotionPosition === 'left' &&
    css`
      padding: 8%;
      justify-content: flex-start;
      align-items: center;
    `}
    ${emotionPosition === 'right' &&
    css`
      padding: 8%;
      justify-content: flex-end;
      align-items: center;
    `}
  `,
)
