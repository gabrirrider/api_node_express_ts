import { Model, DataTypes } from 'sequelize';
export class Profile extends Model {
    static initModel(sequelize) {
        Profile.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profession: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            balance: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Profile',
            tableName: 'Profile',
            timestamps: false,
            freezeTableName: true,
        });
    }
}
export default Profile;
