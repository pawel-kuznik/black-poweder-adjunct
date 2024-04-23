import { UnitDescriptor } from "../../data/units";
import { useUnitDescriptorsStore } from "../../state";
import { ColumnsHeader } from "./ColumnsHeader";
import { UnitItem } from "./UnitItem";

export interface UnitPickerProps {

    onPick?: (model: UnitDescriptor) => void;
};

export function UnitPicker({ onPick } : UnitPickerProps) {

    const unitDescriptorStore = useUnitDescriptorsStore();

    const descriptors = Object.values(unitDescriptorStore.descriptors);

    return (
        <div>
            <ColumnsHeader/>
            {descriptors.map(u => (<UnitItem key={u.key} unit={u} onPick={onPick}/>))}
        </div>
    );
}
