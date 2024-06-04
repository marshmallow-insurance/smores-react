import React from 'react';
import styled, { css } from 'styled-components';
import { theme, type Color } from '../theme';

export enum BadgeSize {
    Sm = "24px",
    Md = "32px",
    Lg = "40px",
}

export type BadgeProps = {
    borderColour?: Color;
    size?: BadgeSize;
    src: string;
    disabled?: boolean;
    zIndex?: number;
}

// TODO: add box-shadow transition
export function Badge({
    borderColour = "lollipop",
    size = BadgeSize.Lg,
    src,
    disabled,
    zIndex
}: BadgeProps) {

    return <Container
        $borderColour={theme.colors[borderColour]}
        $size={size}
        $src={src}
        $disabled={disabled}
        $zIndex={zIndex}
    />
}

type ContainerProps = {
    $borderColour: string
    $size: BadgeSize
    $src: string
    $disabled?: boolean
    $zIndex?: number
}


const Container = styled.div<ContainerProps>((props) => {
    return css`
    background-image: url(${props.$src});
    background-position: center;
    background-size: cover;
    height: ${props.$size};
    width: ${props.$size};
    border-radius: 50%;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;
    outline: 2px solid ${props.$borderColour};
    width: ${props.$size};
    filter: ${props.$disabled ? "contrast(0.5)" : "none"};
    z-index: ${props.$zIndex || 0};

    ${!props.$disabled &&
        css`
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 0px 5px #f0f0f0;
        }`}
`
})