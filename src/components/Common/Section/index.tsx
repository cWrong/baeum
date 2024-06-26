/** @format */

import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
} from "react";
import styled, {
  FlattenSimpleInterpolation,
} from "styled-components";
import {
  Cursor,
  CustomBorder,
  Overflow,
  Position,
} from "@/types/style";

type SectionStyleProps = {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  margin?: string;
  padding?: string;
  border?: CustomBorder;
  borderRadius?: string;
  backgroundColor?: string;
  boxShadow?: string;
  position?: Position;
  overflow?: Overflow;
  cursor?: Cursor;
  flex?: string;
  hover?: FlattenSimpleInterpolation;
  color?: string;
};

type AbleElementType =
  | "div"
  | "section"
  | "main"
  | "article"
  | "aside"
  | "footer"
  | "header";

type SectionOwnProps<T extends AbleElementType> = {
  tagName: T | undefined;
  className?: string;
  sectionRef?: ComponentPropsWithRef<T>["ref"];
};

type SectionProps<T extends AbleElementType> =
  SectionStyleProps &
    SectionOwnProps<T> &
    ComponentPropsWithoutRef<T>;

const Section = <T extends AbleElementType>({
  tagName,
  className,
  sectionRef,
  children,
  ...props
}: SectionProps<T>): JSX.Element => {
  return (
    <CustomSection
      as={tagName || ("div" as AbleElementType)}
      className={className}
      ref={sectionRef}
      {...props}
    >
      {children}
    </CustomSection>
  );
};

const CustomSection = styled.div<SectionStyleProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border?.all};
  border-top: ${({ border }) => border?.top};
  border-left: ${({ border }) => border?.left};
  border-right: ${({ border }) => border?.right};
  border-bottom: ${({ border }) => border?.bottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  position: ${({ position }) => position};
  overflow: ${({ overflow }) => overflow};
  flex: ${({ flex }) => flex};

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ cursor }) => cursor};

  ${({ theme }) => theme.media.hoverable} {
    &:hover {
      ${({ hover }) => hover};
    }
  }
`;

export default Section;
