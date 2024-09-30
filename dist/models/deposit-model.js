import { Model, DataTypes } from 'sequelize';
import Profile from './profile-model.js';
export class Deposit extends Model {
    static initModel(sequelize) {
        Deposit.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            depositValue: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Deposit',
            tableName: 'Deposit',
            timestamps: false,
            freezeTableName: true,
        });
    }
    static associate() {
        Deposit.belongsTo(Profile, {
            foreignKey: 'clienteId',
            as: 'profile',
        });
    }
}
export default Deposit;
