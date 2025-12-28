"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type SectionProps = React.PropsWithChildren<MotionProps & React.HTMLAttributes<HTMLElement>>;
type DivProps = React.PropsWithChildren<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
type H1Props = React.PropsWithChildren<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
type AProps = React.PropsWithChildren<MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(props, ref) {
  return <motion.section ref={ref as any} {...props} />;
});

export const Div = React.forwardRef<HTMLDivElement, DivProps>(function Div(props, ref) {
  return <motion.div ref={ref} {...props} />;
});

export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(function H1(props, ref) {
  return <motion.h1 ref={ref as any} {...props} />;
});

export const A = React.forwardRef<HTMLAnchorElement, AProps>(function A(props, ref) {
  return <motion.a ref={ref as any} {...props} />;
});

export default { Section, Div, H1, A };
