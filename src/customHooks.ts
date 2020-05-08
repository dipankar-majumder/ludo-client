import { useState } from 'react';

export const useForceUpdate = () => useState<unknown>()[1];
