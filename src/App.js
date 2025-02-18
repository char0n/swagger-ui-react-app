import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import ModalsPlugin from 'swagger-editor/plugins/modals';
import DialogsPlugin from 'swagger-editor/plugins/dialogs';
import DropdownMenuPlugin from 'swagger-editor/plugins/dropdown-menu';
import DropzonePlugin from 'swagger-editor/plugins/dropzone';
import VersionsPlugin from 'swagger-editor/plugins/versions';
import EditorTextareaPlugin from 'swagger-editor/plugins/editor-textarea';
import EditorMonacoPlugin from 'swagger-editor/plugins/editor-monaco';
import EditorMonacoLanguageApiDOMPlugin from 'swagger-editor/plugins/editor-monaco-language-apidom';
import EditorContentReadOnlyPlugin from 'swagger-editor/plugins/editor-content-read-only';
import EditorContentOriginPlugin from 'swagger-editor/plugins/editor-content-origin';
import EditorContentTypePlugin from 'swagger-editor/plugins/editor-content-type';
import EditorContentPersistencePlugin from 'swagger-editor/plugins/editor-content-persistence';
import EditorContentFixturesPlugin from 'swagger-editor/plugins/editor-content-fixtures';
import EditorPreviewPlugin from 'swagger-editor/plugins/editor-preview';
import EditorPreviewSwaggerUIPlugin from 'swagger-editor/plugins/editor-preview-swagger-ui';
import EditorPreviewAsyncAPIPlugin from 'swagger-editor/plugins/editor-preview-asyncapi';
import EditorPreviewApiDesignSystemsPlugin from 'swagger-editor/plugins/editor-preview-api-design-systems';
import TopBarPlugin from 'swagger-editor/plugins/top-bar';
import SplashScreenPlugin from 'swagger-editor/plugins/splash-screen';
import LayoutPlugin from 'swagger-editor/plugins/layout';
import EditorSafeRenderPlugin from 'swagger-editor/plugins/editor-safe-render';

function App() {
  return (
    <SwaggerUI
      spec={{
        "asyncapi": "2.4.0",
        "x-sap-catalog-spec-version": "1.2",
        "x-sap-application-namespace": "sap.s4",
        "x-sap-shortText": "Example events to demonstrate SAP Event Catalog Specification.",
        "info": {
          "title": "Event Catalog Example Document",
          "version": "1.0.0",
          "description": "This is an example event catalog from an event provider."
        },
        "channels": {
          "sap.s4.beh.SalesOrder.Approved.v1": {
            "subscribe": {
              "message": {
                "$ref": "#/components/messages/sap.s4.beh.SalesOrder.Approved.v1"
              }
            }
          }
        },
        "components": {
          "messages": {
            "sap.s4.beh.SalesOrder.Approved.v1": {
              "name": "sap.s4.beh.SalesOrder.Approved.v1",
              "x-sap-event-version": "1.0.0",
              "x-sap-event-spec-version": "1.3",
              "x-sap-event-characteristics": {
                "instance-identification": "key-subject",
                "sequencing": "instance-precedence",
                "state-transfer": "full-after-image"
              },
              "x-sap-event-source": "/eu/sap.s4.beh/{instanceId}",
              "x-sap-event-source-parameters": {
                "instanceId": {
                  "description": "The S/4 system and client id.",
                  "schema": {
                    "type": "string"
                  }
                }
              },
              "headers": {
                "properties": {
                  "type": {
                    "const": "sap.s4.beh.SalesOrder.Approved.v1"
                  },
                  "source": {
                    "const": "/eu/sap.s4.beh/ER9CLNT001"
                  }
                }
              },
              "payload": {
                "$ref": "#/components/schemas/sap.s4.beh.SalesOrder.Approved.v1"
              },
              "traits": [
                {
                  "$ref": "#/components/messageTraits/CloudEventsContext"
                }
              ]
            },
            "sap.s4.beh.SalesOrder.Cancelled.v1": {
              "name": "sap.s4.beh.SalesOrder.Cancelled.v1",
              "x-sap-event-version": "1.0.0",
              "x-sap-event-spec-version": "1.3",
              "x-sap-event-characteristics": {
                "instance-identification": "key-subject",
                "sequencing": "instance-precedence",
                "state-transfer": "full-after-image"
              },
              "x-sap-event-source": "/eu/sap.s4.beh/{instanceId}",
              "x-sap-event-source-parameters": {
                "instanceId": {
                  "description": "The S/4 system and client id.",
                  "schema": {
                    "type": "string"
                  }
                }
              },
              "headers": {
                "properties": {
                  "type": {
                    "const": "sap.s4.beh.SalesOrder.Cancelled.v1"
                  },
                  "source": {
                    "const": "/eu/sap.s4.beh/ER9CLNT001"
                  }
                }
              },
              "payload": {
                "$ref": "#/components/schemas/sap.s4.beh.SalesOrder.Cancelled.v1"
              },
              "traits": [
                {
                  "$ref": "#/components/messageTraits/CloudEventsContext"
                }
              ]
            }
          },
          "schemas": {
            "sap.s4.beh.SalesOrder.Approved.v1": {
              "type": "object",
              "description": "Payload of the sap.s4.beh.SalesOrder.Approved.v1 event.",
              "required": ["id"],
              "x-key": ["id"],
              "properties": {
                "id": {
                  "type": "string"
                },
                "displayName": {
                  "type": "string"
                }
              },
              "additionalProperties": true
            },
            "sap.s4.beh.SalesOrder.Cancelled.v1": {
              "type": "object",
              "description": "Payload of the sap.s4.beh.SalesOrder.Cancelled.v1 event.",
              "required": ["id"],
              "x-key": ["id"],
              "properties": {
                "id": {
                  "type": "string"
                },
                "displayName": {
                  "type": "string"
                }
              },
              "additionalProperties": true
            }
          },
          "messageTraits": {
            "CloudEventsContext": {
              "headers": {
                "type": "object",
                "required": ["id", "specversion", "type", "source", "subject", "sequence"],
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Identifies the event."
                  },
                  "specversion": {
                    "type": "string",
                    "description": "The version of the CloudEvents specification the event uses.",
                    "const": "1.0"
                  },
                  "type": {
                    "type": "string",
                    "description": "Describes the type of event related to the originating occurrence."
                  },
                  "source": {
                    "type": "string",
                    "description": "Identifies the context in which an event happened.",
                    "format": "uri-reference"
                  },
                  "subject": {
                    "type": "string",
                    "description": "Describes the subject of the event in the context of the event producer (identified by source)."
                  },
                  "sequence": {
                    "type": "string",
                    "description": "Identifier expressing the relative order of the event."
                  },
                  "time": {
                    "type": "string",
                    "description": "Timestamp of when the occurrence happened. Must adhere to RFC 3339.",
                    "format": "date-time"
                  },
                  "datacontenttype": {
                    "type": "string",
                    "description": "Content type of the data value. Must adhere to RFC 2046 format.",
                    "const": "application/json"
                  },
                  "dataschema": {
                    "type": "string",
                    "description": "Identifies the schema that data adheres to.",
                    "format": "uri"
                  }
                },
                "additionalProperties": false,
                "patternPropeties": {
                  "^xsap[a-z0-9]+$": {
                    "description": "Application defined custom extension context attributes.",
                    "type": ["boolean", "integer", "string"]
                  }
                }
              }
            }
          }
        }
      }
      }
      plugins={[
        ModalsPlugin,
        DialogsPlugin,
        DropdownMenuPlugin,
        DropzonePlugin,
        VersionsPlugin,
        EditorTextareaPlugin,
        EditorMonacoPlugin,
        EditorMonacoLanguageApiDOMPlugin,
        EditorContentReadOnlyPlugin,
        EditorContentOriginPlugin,
        EditorContentTypePlugin,
        EditorContentPersistencePlugin,
        EditorContentFixturesPlugin,
        EditorPreviewPlugin,
        EditorPreviewSwaggerUIPlugin,
        EditorPreviewAsyncAPIPlugin,
        EditorPreviewApiDesignSystemsPlugin,
        TopBarPlugin,
        SplashScreenPlugin,
        LayoutPlugin,
        EditorSafeRenderPlugin,
      ]}
    />
  );
}

export default App;
