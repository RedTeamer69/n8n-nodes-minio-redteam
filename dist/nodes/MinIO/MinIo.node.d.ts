import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { execute } from './actions/execute.operation';
import { credentialTest, listSearch } from './methods';
export declare class MinIo implements INodeType {
    description: INodeTypeDescription;
    execute: typeof execute;
    methods: {
        credentialTest: typeof credentialTest;
        listSearch: typeof listSearch;
    };
}
