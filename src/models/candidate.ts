import { sequelize } from '../database'
import { DataTypes, Model} from 'sequelize'

interface CandidatesInstance extends Model {
    id: number,
    name: string,
    bio: string,
    email: string,
    phone: string,
    openToWork: boolean
}

export const Candidate = sequelize.define<CandidatesInstance>(
    'candidates',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        bio: DataTypes.TEXT,
        phone: DataTypes.STRING,
        openToWork: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
)