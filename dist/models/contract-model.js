import { Model, DataTypes } from 'sequelize';
import Profile from './profile-model.js';
export class Contract extends Model {
    static initModel(sequelize) {
        Contract.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            terms: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            clienteId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Profile,
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            contractorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Profile,
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Contract',
            tableName: 'Contract',
            timestamps: false,
            freezeTableName: true,
        });
    }
    static associate() {
        Contract.belongsTo(Profile, {
            foreignKey: 'clientId',
            as: 'client',
        });
        Contract.belongsTo(Profile, {
            foreignKey: 'contractorId',
            as: 'contractor',
        });
    }
}
export default Contract;
