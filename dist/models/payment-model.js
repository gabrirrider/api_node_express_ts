import { Model, DataTypes } from 'sequelize';
import Job from './job-model.js';
export class Payment extends Model {
    static initModel(sequelize) {
        Payment.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            jobId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Job,
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            operationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            paymentValue: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Payment',
            tableName: 'Payment',
            timestamps: false,
            freezeTableName: true,
        });
    }
    static associate() {
        Payment.belongsTo(Job, {
            foreignKey: 'jobId',
            as: 'job',
        });
    }
}
export default Payment;
