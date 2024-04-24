import { UnitDescriptor } from "../../data/units";
import { calcUnitCost } from "../../logic";
import { Badge } from "../Badge";
import { Flag } from "../Flag";

import "./UnitCard.css";

export interface UnitCardProps {
    unit: UnitDescriptor;
};

export function UnitCard({ unit }: UnitCardProps) {

    const points = calcUnitCost(unit);

    return (
        <div className="unitcard">
            <div className="unitcard-header">
                <Flag which={unit.affiliation}/> {unit.key} <Badge>{points} pts</Badge>
            </div>
            <div className="unitcard-statsheader">
                <div>
                    Type
                </div>
                <div>
                    Arnament
                </div>
                <div>
                    H-to-H
                </div>
                <div>
                    Shooting
                </div>
                <div>
                    Morale
                </div>
                <div>
                    Stamina
                </div>
            </div>
            <div className="unitcard-statsrow">
                <div>
                    {unit.type}
                </div>
                <div>
                    {unit.arnament}
                </div>
                <div>
                    {unit.handToHand}
                </div>
                <div>
                    {unit.shooting}
                </div>
                <div>
                    {unit.morale}+
                </div>
                <div>
                    {unit.stamina}
                </div>
            </div>
            <div>
                {unit.special.map(s => (<span>{s}</span>))}
            </div>
        </div>
    );
}
