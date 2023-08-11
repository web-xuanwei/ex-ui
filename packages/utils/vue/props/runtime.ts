import { fromPairs } from 'lodash';

import { EpPropMergeType } from './types';

import type { PropType } from 'vue';

export const buidProp = <
  Type = never,
  Value = never,
  Validator = never,
  Default extends EpPropMergeType<Type, Value, Validator> = never,
  Required extends boolean = false
>() => {
  
};

export const buidlProps = () => {};
