/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
import Atomsiconstick from "./Atomsiconstick";
export default function Moleculescheckbox(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "checkbox\u2014bg": {},
        "atoms/icons/tick": {},
        Checkbox: {},
        Moleculescheckbox: {},
      },
      variantValues: { property1: "checkbox", property2: "no" },
    },
    {
      overrides: {
        "checkbox\u2014bg": {
          border: "1px SOLID rgba(255,255,255,1)",
          backgroundColor: "rgba(48,161,147,1)",
        },
        "atoms/icons/tick": { top: "16.08%", bottom: "17.26%" },
        Checkbox: {},
        Moleculescheckbox: {},
      },
      variantValues: { property1: "checkbox", property2: "yes" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      direction="row"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculescheckbox")}
    >
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Checkbox")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(214,214,214,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "checkbox\u2014bg")}
        ></View>
        <Atomsiconstick
          position="absolute"
          top="14.59%"
          bottom="18.75%"
          left="19.25%"
          right="14.09%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/tick")}
        ></Atomsiconstick>
      </View>
    </Flex>
  );
}
