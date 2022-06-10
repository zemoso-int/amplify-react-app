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
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Moleculesradio(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Bg: {}, Indicator: {}, Radio: {}, Moleculesradio: {} },
      variantValues: { property1: "radio", property2: "no" },
    },
    {
      overrides: {
        Bg: {
          paths: [
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(74,186,173,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Indicator: {},
        Radio: {},
        Moleculesradio: {},
      },
      variantValues: { property1: "radio", property2: "yes" },
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
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesradio")}
    >
      <View
        width="16px"
        height="16px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Radio")}
      >
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M15 8C15 11.866 11.866 15 8 15L8 17C12.9706 17 17 12.9706 17 8L15 8ZM8 15C4.13401 15 1 11.866 1 8L-1 8C-1 12.9706 3.02944 17 8 17L8 15ZM1 8C1 4.13401 4.13401 1 8 1L8 -1C3.02944 -1 -1 3.02944 -1 8L1 8ZM8 1C11.866 1 15 4.13401 15 8L17 8C17 3.02944 12.9706 -1 8 -1L8 1Z",
              stroke: "rgba(214,214,214,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Bg")}
        ></Icon>
        <Icon
          width="8px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
          paths={[
            {
              d: "M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="25%"
          bottom="25%"
          left="25%"
          right="25%"
          {...getOverrideProps(overrides, "Indicator")}
        ></Icon>
      </View>
    </Flex>
  );
}
