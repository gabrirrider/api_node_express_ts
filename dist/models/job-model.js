import { Model, DataTypes } from 'sequelize';
import Contract from './contract-model.js';
export class Job extends Model {
    static initModel(sequelize) {
        Job.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            contractId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Contract,
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            paymentDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            paid: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        }, {
            sequelize,
            modelName: 'Job',
            tableName: 'Job',
            timestamps: false,
            freezeTableName: true,
        });
    }
    static associate() {
        Job.belongsTo(Contract, {
            foreignKey: 'contractId',
            as: 'contract',
        });
    }
}
export default Job;
