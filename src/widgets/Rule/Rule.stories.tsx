import type { Meta, StoryObj } from '@storybook/react';
import { Rule } from '../../widgets';

const meta = {
    title: 'Widgets/Rule',
    component: Rule,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Rule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brave: Story = {
    args: {
        rule: "brave"
    }
};

export const Crack: Story = {
    args: {
        rule: "crack"
    }
};

export const Elite3: Story = {
    args: {
        rule: "elite-3"
    }
};

export const Elite4: Story = {
    args: {
        rule: "elite-4"
    }
};

export const Elite5: Story = {
    args: {
        rule: "elite-5"
    }
};

export const Elite6: Story = {
    args: {
        rule: "elite-6"
    }
};

export const FirstFire: Story = {
    args: {
        rule: "first-fire"
    }
};

export const Fanatics: Story = {
    args: {
        rule: "fanatics"
    }
};

export const FerociousCharge: Story = {
    args: {
        rule: "ferocious-charge"
    }
};

export const FormSquare: Story = {
    args: {
        rule: "form-square"
    }
};

export const FreshlyRaised: Story = {
    args: {
        rule: "freshly-raised"
    }
};

export const LieDown: Story = {
    args: {
        rule: "lie-down"
    }
};

export const HeavyCavalryD3: Story = {
    args: {
        rule: "heavy-cavalry+d3"
    },
};

export const HeavyCavalry1: Story = {
    args: {
        rule: "heavy-cavalry+1"
    },
};

export const Lancers: Story = {
    args: {
        rule: "lancers"
    },
};

export const Marauders: Story = {
    args : {
        rule: "marauders"
    }
};

export const DetachedLightCompanies: Story = {
    args: {
        rule: "detached-ligh-companies"
    },
};
