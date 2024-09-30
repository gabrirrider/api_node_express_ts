import { Model, DataTypes } from 'sequelize';
// Definindo a classe Colaborador estendendo Model e utilizando as interfaces acima
export class Colaborador extends Model {
    // Se você precisar de createdAt e updatedAt, descomente as linhas abaixo
    // public readonly createdAt!: Date;
    // public readonly updatedAt!: Date;
    // Inicializando o modelo com o método estático init
    static initModel(sequelize) {
        Colaborador.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nomeCompleto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize, // Passa a conexão do Sequelize
            modelName: 'Colaborador', // Nome do modelo
            tableName: 'Colaborador', // Nome da tabela explícito
            timestamps: false, // Desabilitar timestamps (createdAt, updatedAt)
            freezeTableName: true, // Prevenir o Sequelize de pluralizar o nome da tabela
        });
    }
}
export default Colaborador;
