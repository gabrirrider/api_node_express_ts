import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

// Definição das interfaces para os atributos da classe Colaborador
interface ColaboradorAttributes {
    id: number;
    nomeCompleto: string;
}

// Definição de atributos necessários para criação de um Colaborador (omitindo 'id', pois é autoincrementado)
interface ColaboradorCreationAttributes extends Optional<ColaboradorAttributes, 'id'> { }

// Definindo a classe Colaborador estendendo Model e utilizando as interfaces acima
export class Colaborador extends Model<ColaboradorAttributes, ColaboradorCreationAttributes>
    implements ColaboradorAttributes {
    public id!: number;
    public nomeCompleto!: string;

    // Se você precisar de createdAt e updatedAt, descomente as linhas abaixo
    // public readonly createdAt!: Date;
    // public readonly updatedAt!: Date;

    // Inicializando o modelo com o método estático init
    static initModel(sequelize: Sequelize) {
        Colaborador.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nomeCompleto: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,           // Passa a conexão do Sequelize
                modelName: 'Colaborador', // Nome do modelo
                tableName: 'Colaborador', // Nome da tabela explícito
                timestamps: false,       // Desabilitar timestamps (createdAt, updatedAt)
                freezeTableName: true,   // Prevenir o Sequelize de pluralizar o nome da tabela
            }
        );
    }
}

// Exemplo de como sincronizar o modelo com o banco de dados (mova para app.js, por exemplo)
// await Colaborador.sync();

export { ColaboradorAttributes, ColaboradorCreationAttributes };
export default Colaborador;