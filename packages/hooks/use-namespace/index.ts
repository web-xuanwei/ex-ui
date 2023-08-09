import { computed, getCurrentInstance, inject, ref, unref } from 'vue';
import type { InjectionKey, Ref } from 'vue';

export const defaultNamespace = 'exc';
const statePrefix = 'is-';

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;

  return cls;
};

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey');

// 还不懂干什么
export const useGetDriverNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const driverdNameSpace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(driverdNameSpace) || defaultNamespace;
  });

  return namespace;
};

export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namesapce = useGetDriverNamespace();
  const b = (blockSuffix = '') => {
    return _bem(namesapce.value, block, blockSuffix, '', '');
  };

  return {
    namesapce,
    b
  };
};
